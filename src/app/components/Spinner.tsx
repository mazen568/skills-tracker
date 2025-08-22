"use client";

export default function Spinner({ size = 40, color = "white" }: { size?: number; color?: string }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="border-4 border-t-transparent border-solid rounded-full animate-spin border-white text-center"
    >
      <style jsx>{`
        div {
          border-color: ${color} transparent transparent transparent;
        }
      `}</style>
    </div>
  );
}
