import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 35;
const CONNECTION_DISTANCE = 2.8;
const MAX_LINES = 200;

function NeuralNodes() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const bufferRef = useRef(new Float32Array(MAX_LINES * 6));

  const { positions, velocities } = useMemo(() => {
    const positions = Array.from({ length: NODE_COUNT }, () => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4,
    ]);
    const velocities = Array.from({ length: NODE_COUNT }, () => [
      (Math.random() - 0.5) * 0.004,
      (Math.random() - 0.5) * 0.004,
      (Math.random() - 0.5) * 0.002,
    ]);
    return { positions, velocities };
  }, []);

  const colors = useMemo(() => {
    const palette = [
      new THREE.Color('#00FFFF'),
      new THREE.Color('#9400D3'),
      new THREE.Color('#FF1493'),
      new THREE.Color('#39FF14'),
    ];
    return Array.from({ length: NODE_COUNT }, () => palette[Math.floor(Math.random() * palette.length)]);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const posAttr = useMemo(() => {
    const attr = new THREE.BufferAttribute(bufferRef.current, 3);
    attr.setUsage(THREE.DynamicDrawUsage);
    return attr;
  }, []);

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i][0] += velocities[i][0];
      positions[i][1] += velocities[i][1];
      positions[i][2] += velocities[i][2];

      for (let d = 0; d < 3; d++) {
        const limit = d === 2 ? 2 : d === 1 ? 3 : 4;
        if (Math.abs(positions[i][d]) > limit) velocities[i][d] *= -1;
      }

      dummy.position.set(positions[i][0], positions[i][1], positions[i][2]);
      dummy.scale.setScalar(0.04);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, colors[i]);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;

    // Reuse buffer instead of creating new array each frame
    let lineCount = 0;
    const buf = bufferRef.current;
    const distSq = CONNECTION_DISTANCE * CONNECTION_DISTANCE;

    for (let i = 0; i < NODE_COUNT && lineCount < MAX_LINES; i++) {
      for (let j = i + 1; j < NODE_COUNT && lineCount < MAX_LINES; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        if (dx * dx + dy * dy + dz * dz < distSq) {
          const off = lineCount * 6;
          buf[off]     = positions[i][0]; buf[off + 1] = positions[i][1]; buf[off + 2] = positions[i][2];
          buf[off + 3] = positions[j][0]; buf[off + 4] = positions[j][1]; buf[off + 5] = positions[j][2];
          lineCount++;
        }
      }
    }

    posAttr.count = lineCount * 2;
    posAttr.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineCount * 2);
    linesRef.current.geometry.computeBoundingSphere();
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 5, 5]} />
        <meshBasicMaterial />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[bufferRef.current, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#00FFFF" opacity={0.12} transparent />
      </lineSegments>
    </>
  );
}

const NeuralNetwork3D = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1]} frameloop="always">
      <ambientLight intensity={0.5} />
      <NeuralNodes />
    </Canvas>
  </div>
);

export default NeuralNetwork3D;
