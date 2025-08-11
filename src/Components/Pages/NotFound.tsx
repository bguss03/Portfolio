import FuzzyText from "../../assets/FuzzyText/FuzzyText"

export default function NotFound() {
    return (
            <div className="flex flex-col items-center justify-center min-h-screen" data-aos="fade-up" data-aos-delay={200}>
                <FuzzyText
                    baseIntensity={0.3}
                    hoverIntensity={1}
                    enableHover={true}
                >
                    404
                </FuzzyText>
                 <FuzzyText
                    baseIntensity={0.3}
                    hoverIntensity={1}
                    enableHover={true}
                >
                    Not Found
                </FuzzyText>
            </div>
    )
}
