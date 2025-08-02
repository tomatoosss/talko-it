'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

export default function ThreeScene({ className = '' }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating geometries
    const geometries = [
      new THREE.TetrahedronGeometry(0.3),
      new THREE.OctahedronGeometry(0.3),
      new THREE.IcosahedronGeometry(0.3),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
    ];

    const meshes: THREE.Mesh[] = [];

    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < 50; i++) {
      const x1 = (Math.random() - 0.5) * 10;
      const y1 = (Math.random() - 0.5) * 10;
      const z1 = (Math.random() - 0.5) * 10;
      const x2 = (Math.random() - 0.5) * 10;
      const y2 = (Math.random() - 0.5) * 10;
      const z2 = (Math.random() - 0.5) * 10;

      linePositions.push(x1, y1, z1, x2, y2, z2);
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;

      // Rotate particles
      particlesMesh.rotation.x = time * 0.1;
      particlesMesh.rotation.y = time * 0.15;

      // Animate meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 * (index + 1);
        mesh.rotation.y += 0.01 * (index + 1);
        mesh.position.y = Math.sin(time + index) * 0.5;
      });

      // Animate lines
      lines.rotation.x = time * 0.05;
      lines.rotation.y = time * 0.03;

      // Camera movement
      camera.position.x = Math.sin(time * 0.5) * 2;
      camera.position.y = Math.cos(time * 0.3) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
} 