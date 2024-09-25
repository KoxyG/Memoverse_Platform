"use client";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Users",
    value: "50k",
    postfix: "+",
  },
  {
    
    metric: "Blog plosts",
    value: "30k",
   
  },
  {
    metric: "Albums",
    value: "20k",
   
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-36 sm:py-20 xl:px-35">
      <div className=" rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-orange-300 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value.replace(/[^\d]/g, ''), 10)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                <span className="text-white">k</span>
                {achievement.value.slice(-1) === 'K' ? 'K+' : '+'}
              </h2>
              <p className="text-white text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;