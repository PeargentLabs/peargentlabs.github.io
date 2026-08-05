"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    r: number;
    glow: number;
    links: number[];
}

interface Pulse {
    from: number;
    to: number;
    t: number;
    speed: number;
    depth: number;
}

function resolveRGB(varName: string, fallback: string) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    if (!value) return fallback;
    const temp = document.createElement("div");
    temp.style.color = value;
    document.body.appendChild(temp);
    const rgb = getComputedStyle(temp).color;
    document.body.removeChild(temp);
    const match = rgb.match(/\d+/g);
    return match ? match.slice(0, 3).join(",") : fallback;
}

export function NeuroBackground({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const inkRGB = resolveRGB("--color-ink-soft", "91,95,102");
        const accentRGB = resolveRGB("--color-accent", "92,138,46");

        let W = 0;
        let H = 0;
        let nodes: Node[] = [];
        let pulses: Pulse[] = [];
        let raf = 0;

        function buildGraph() {
            const rect = canvas!.getBoundingClientRect();
            W = rect.width;
            H = rect.height;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas!.width = W * dpr;
            canvas!.height = H * dpr;
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.max(18, Math.floor((W * H) / 26000));
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * W,
                y: Math.random() * H,
                r: 1.4 + Math.random() * 1.4,
                glow: 0,
                links: [],
            }));

            nodes.forEach((a, i) => {
                const dists = nodes
                    .map((b, j) => ({ j, d: j === i ? Infinity : Math.hypot(a.x - b.x, a.y - b.y) }))
                    .sort((p, q) => p.d - q.d);
                a.links = dists
                    .slice(0, 2 + Math.floor(Math.random() * 2))
                    .filter((d) => d.d < Math.max(W, H) * 0.28)
                    .map((d) => d.j);
            });
            pulses = [];
        }

        buildGraph();
        const handleResize = () => buildGraph();
        window.addEventListener("resize", handleResize);

        function fire(nodeIdx: number, depth: number) {
            const node = nodes[nodeIdx];
            if (!node || !node.links.length || depth > 3) return;
            node.glow = 1;
            const branchCount = depth === 0 ? 1 + Math.floor(Math.random() * Math.min(2, node.links.length)) : 1;
            const chosen = [...node.links].sort(() => Math.random() - 0.5).slice(0, branchCount);
            chosen.forEach((targetIdx) => {
                pulses.push({ from: nodeIdx, to: targetIdx, t: 0, speed: 0.012 + Math.random() * 0.01, depth });
            });
        }

        let fireInterval: ReturnType<typeof setInterval> | undefined;
        if (!reduceMotion) {
            fireInterval = setInterval(() => {
                fire(Math.floor(Math.random() * nodes.length), 0);
            }, 1000);
        }

        function draw() {
            ctx!.clearRect(0, 0, W, H);

            ctx!.lineWidth = 1;
            nodes.forEach((a) => {
                a.links.forEach((j) => {
                    const b = nodes[j];
                    ctx!.strokeStyle = `rgba(${inkRGB},0.07)`;
                    ctx!.beginPath();
                    ctx!.moveTo(a.x, a.y);
                    ctx!.lineTo(b.x, b.y);
                    ctx!.stroke();
                });
            });

            pulses.forEach((p) => {
                const a = nodes[p.from];
                const b = nodes[p.to];
                if (!a || !b) return;
                p.t += p.speed;
                const x = a.x + (b.x - a.x) * p.t;
                const y = a.y + (b.y - a.y) * p.t;
                const fade = Math.sin(Math.min(p.t, 1) * Math.PI);
                ctx!.beginPath();
                ctx!.fillStyle = `rgba(${accentRGB},${Math.min(1, 1.15 * fade).toFixed(3)})`;
                ctx!.arc(x, y, 2.4, 0, Math.PI * 2);
                ctx!.fill();
                ctx!.strokeStyle = `rgba(${accentRGB},${(0.45 * fade).toFixed(3)})`;
                ctx!.lineWidth = 1.4;
                ctx!.beginPath();
                ctx!.moveTo(a.x, a.y);
                ctx!.lineTo(x, y);
                ctx!.stroke();
            });

            pulses = pulses.filter((p) => {
                if (p.t < 1) return true;
                if (Math.random() < 0.55) fire(p.to, p.depth + 1);
                return false;
            });

            nodes.forEach((n) => {
                n.glow *= 0.93;
                const alpha = n.glow > 0.05 ? Math.min(1, 0.35 + n.glow) : 0.16;
                const rgb = n.glow > 0.05 ? accentRGB : inkRGB;
                ctx!.beginPath();
                ctx!.fillStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
                ctx!.arc(n.x, n.y, n.r + n.glow * 2.2, 0, Math.PI * 2);
                ctx!.fill();
            });

            if (!reduceMotion) raf = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            if (fireInterval) clearInterval(fireInterval);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
