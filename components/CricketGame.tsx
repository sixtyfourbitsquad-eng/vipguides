"use client";

import { useEffect, useRef, useState } from "react";

type GamePhase = "start" | "playing" | "gameover";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

export default function CricketGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<GamePhase>("start");
  
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [wickets, setWickets] = useState(3);
  const [combo, setCombo] = useState(1);

  // Game active refs
  const stateRef = useRef({
    phase: "start" as GamePhase,
    score: 0,
    wickets: 3,
    combo: 1,
    bestScore: 0,
    ball: { x: 0, y: 0, active: false, speed: 4, hitOutcome: null as number | null },
    particles: [] as Particle[],
    lastSwingTime: 0,
    frames: 0,
    bowlerState: 0,
    batsmanHitFrame: 0,
    feedbackText: "",
    feedbackAlpha: 0,
    batting: false
  });

  useEffect(() => {
    // Migration of legacy keys / Load best score
    const legacy = localStorage.getItem("cricket_best");
    const current = localStorage.getItem("cricketexpertpro_best");
    
    let best = 0;
    if (legacy && !current) {
      best = parseInt(legacy, 10) || 0;
      localStorage.setItem("cricketexpertpro_best", best.toString());
    } else if (current) {
      best = parseInt(current, 10) || 0;
    }
    
    setBestScore(best);
    stateRef.current.bestScore = best;
  }, []);

  useEffect(() => {
    stateRef.current.phase = phase;
    stateRef.current.score = score;
    stateRef.current.wickets = wickets;
    stateRef.current.combo = combo;
    stateRef.current.bestScore = bestScore;
  }, [phase, score, wickets, combo, bestScore]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const s = stateRef.current;

    const spawnBall = () => {
      s.ball.active = true;
      s.ball.hitOutcome = null;
      s.ball.x = canvas.width - 50; 
      s.ball.y = canvas.height * 0.4;
      // Difficulty slope
      s.ball.speed = 5 + Math.min(s.score / 20, 10);
      s.bowlerState = 30; // animation frames for bowler throw
      s.batting = false;
    };

    const addParticles = (x: number, y: number, color: string, amount: number) => {
      for (let i = 0; i < amount; i++) {
        s.particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          life: 1.0,
          color,
          size: Math.random() * 4 + 2
        });
      }
    };

    const showFeedback = (text: string, _color: string) => {
      s.feedbackText = text;
      s.feedbackAlpha = 1.0;
    };

    const endInnings = () => {
      setPhase("gameover");
      if (s.score > s.bestScore) {
        setBestScore(s.score);
        localStorage.setItem("cricketexpertpro_best", s.score.toString());
      }
    };

    const attemptSwing = () => {
      if (s.phase !== "playing") return;
      if (s.batting) return; // already swinging
      
      const HIT_ZONE_X = 120;
      s.batting = true;
      s.batsmanHitFrame = 15;

      if (s.ball.active && s.ball.hitOutcome === null) {
        const dist = Math.abs(s.ball.x - HIT_ZONE_X);

        let runs = 0;
        let pColor = "#fff";
        let fText = "";

        if (dist < 20) {
          runs = 6;
          pColor = "#f97316"; // perfect orange
          fText = "PERFECT 6!";
        } else if (dist < 50) {
          runs = 4;
          pColor = "#eab308"; // great yellow
          fText = "GREAT 4!";
        } else if (dist < 90) {
          runs = 2;
          pColor = "#60a5fa"; // okay blue
          fText = "GOOD 2!";
        } else {
          // Miss
          handleMiss();
          return;
        }

        s.ball.hitOutcome = runs;
        
        const newScore = s.score + (runs * s.combo);
        setScore(newScore);
        
        if (runs === 6) {
          setCombo(c => c + 1);
        } else if (runs === 2) {
          setCombo(1);
        }

        addParticles(s.ball.x, s.ball.y, pColor, runs * 5);
        showFeedback(fText, pColor);
      }
    };

    const handleMiss = () => {
      s.ball.hitOutcome = 0;
      setWickets(w => {
        const nw = w - 1;
        if (nw <= 0) setTimeout(endInnings, 1000);
        return Math.max(0, nw);
      });
      setCombo(1);
      showFeedback("MISS!", "#ef4444");
    };

    const render = () => {
      s.frames++;
      
      // Clear
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pitch
      const pitchY = canvas.height - 180;
      ctx.fillStyle = "#2a3b2a";
      ctx.fillRect(0, pitchY, canvas.width, 180);
      
      // Crease lines
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      // Batsman crease
      ctx.moveTo(100, pitchY);
      ctx.lineTo(100, canvas.height);
      ctx.moveTo(140, pitchY);
      ctx.lineTo(140, canvas.height);
      // Bowler crease
      ctx.moveTo(canvas.width - 100, pitchY);
      ctx.lineTo(canvas.width - 100, canvas.height);
      ctx.stroke();

      // Draw players
      // Batsman
      ctx.fillStyle = "#e86c1e";
      ctx.fillRect(90, canvas.height - 150, 20, 80); // body
      // Bat
      ctx.fillStyle = "#fff";
      ctx.save();
      ctx.translate(100, canvas.height - 110);
      if (s.batsmanHitFrame > 0) {
        ctx.rotate(-Math.PI / 3);
        s.batsmanHitFrame--;
      } else {
        ctx.rotate(Math.PI / 4);
      }
      ctx.fillRect(-5, 0, 10, 60);
      ctx.restore();

      // Bowler
      ctx.fillStyle = "#475569";
      const bowlerX = canvas.width - 80 + (s.bowlerState > 0 ? (30 - s.bowlerState) : 0);
      ctx.fillRect(bowlerX, canvas.height - 140, 20, 70);
      if (s.bowlerState > 0) s.bowlerState--;

      // Ball logic
      if (s.phase === "playing") {
        if (!s.ball.active && s.wickets > 0 && s.frames % 100 === 0) {
          spawnBall();
        }

        if (s.ball.active) {
          if (s.ball.hitOutcome === null) {
            // Normal pitch
            s.ball.x -= s.ball.speed;
            const flightProg = 1 - (s.ball.x / canvas.width);
            s.ball.y = (canvas.height - 140) + Math.sin(flightProg * Math.PI) * 50;

            if (s.ball.x < 80) {
              handleMiss();
            }
          } else {
            // Hit state
            s.ball.x += s.ball.speed * 2;
            s.ball.y -= (s.ball.hitOutcome || 1) * 3;
            if (s.ball.x > canvas.width || s.ball.y < 0) {
              s.ball.active = false;
            }
          }

          // Draw ball
          ctx.fillStyle = s.ball.hitOutcome === 0 ? "#444" : "#ef4444";
          ctx.beginPath();
          ctx.arc(s.ball.x, s.ball.y, 6, 0, Math.PI * 2);
          ctx.fill();
          
          if (s.ball.hitOutcome === null && s.ball.x < 300) {
            // target zone indicator
            ctx.fillStyle = "rgba(232,108,30,0.1)";
            ctx.fillRect(100, pitchY, 40, canvas.height - pitchY);
          }
        }
      }

      // Particles
      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.05;
        if (p.life <= 0) {
          s.particles.splice(i, 1);
        } else {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
      }

      // Feedback Text
      if (s.feedbackAlpha > 0) {
        ctx.fillStyle = `rgba(255, 255, 255, ${s.feedbackAlpha})`;
        ctx.font = "bold 36px var(--font-nunito), Arial";
        ctx.textAlign = "center";
        ctx.fillText(s.feedbackText, canvas.width / 2, canvas.height / 2 - 50);
        s.feedbackAlpha -= 0.02;
        ctx.textAlign = "left";
      }

      // Active HUD
      if (s.phase === "playing") {
        ctx.fillStyle = "rgba(10,10,10,0.7)";
        ctx.fillRect(0, 0, canvas.width, 60);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px Arial";
        ctx.fillText(`SCORE: ${s.score}`, 20, 38);
        
        ctx.fillStyle = "#e86c1e";
        ctx.fillText(`COMBO x${s.combo}`, 180, 38);

        ctx.fillStyle = "#fff";
        ctx.fillText(`WICKETS: ${"🔴".repeat(s.wickets)}`, canvas.width - 180, 38);
      }

      // Overlay Panels
      const drawPanel = (title: string, sub: string, btn: string) => {
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#1a1a1a";
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.lineWidth = 2;
        const pw = Math.min(400, canvas.width - 40);
        const ph = 250;
        const px = canvas.width / 2 - pw / 2;
        const py = canvas.height / 2 - ph / 2;
        
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(px, py, pw, ph, 16);
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.fillRect(px, py, pw, ph);
          ctx.strokeRect(px, py, pw, ph);
        }

        ctx.textAlign = "center";
        ctx.fillStyle = "#e86c1e";
        ctx.font = "bold 32px var(--font-nunito), Arial";
        ctx.fillText(title, canvas.width/2, py + 60);

        ctx.fillStyle = "#fff";
        ctx.font = "16px Arial";
        ctx.fillText(sub, canvas.width/2, py + 100);

        if (s.phase === "gameover") {
          ctx.font = "bold 20px Arial";
          ctx.fillText(`Final Score: ${s.score}`, canvas.width/2, py + 140);
        }

        // Button
        ctx.fillStyle = "#e86c1e";
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(canvas.width/2 - 100, py + ph - 70, 200, 50, 8);
          ctx.fill();
        } else {
          ctx.fillRect(canvas.width/2 - 100, py + ph - 70, 200, 50);
        }
        
        ctx.fillStyle = "#fff";
        ctx.font = "bold 18px Arial";
        ctx.fillText(btn, canvas.width/2, py + ph - 38);
        ctx.textAlign = "left";
      };

      if (s.phase === "start") drawPanel("Cricket ExpertPro", "Hit Space or Tap to Swing", "START GAME");
      if (s.phase === "gameover") drawPanel("INNINGS OVER", `Best Score: ${s.bestScore}`, "PLAY AGAIN");

      animId = requestAnimationFrame(render);
    };

    render();

    // Controls Handling
    const handleInput = (e?: Event) => {
      if (e) e.preventDefault();
      const cp = stateRef.current.phase;
      
      if (cp === "start" || cp === "gameover") {
        setScore(0);
        setWickets(3);
        setCombo(1);
        s.ball.active = false;
        setPhase("playing");
      } else if (cp === "playing") {
        attemptSwing();
      }
    };

    const keyHandler = (e: KeyboardEvent) => {
      if (e.code === "Space") handleInput(e);
    };

    canvas.addEventListener("pointerdown", handleInput);
    window.addEventListener("keydown", keyHandler);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", handleInput);
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full touch-none cursor-pointer outline-none"
      tabIndex={0}
    />
  );
}
