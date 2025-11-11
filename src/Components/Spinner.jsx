import React from 'react';

const Spinner = () => {
  const delays = [0.12, 0.24, 0.36, 0.48, 0.6];
  const opacities = [0.9, 0.8, 0.7, 0.6, 0.5];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-6 h-6 animate-spin-slow">
        {delays.map((delay, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-full bg-[#3e885b]"
            style={{
              animation: 'spinnerAni 1s infinite backwards',
              animationDelay: `${delay}s`,
              opacity: opacities[index],
            }}
          />
        ))}
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes spinnerAni {
          0% {
            transform: rotate(0deg) translateY(-200%);
          }
          60%,
          100% {
            transform: rotate(360deg) translateY(-200%);
          }
        }

        .animate-spin-slow {
          animation: rotateSpin 2s ease-in-out infinite;
        }

        @keyframes rotateSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
