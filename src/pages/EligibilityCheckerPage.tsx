import { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useLanguage } from "@/hooks/use-language";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { SubServiceCard } from "@/components/SubServiceCard";
import { 
  Users, User, Baby, UserCheck,
  Briefcase, Tractor, Store, GraduationCap, Home as HomeIcon,
  IndianRupee, TrendingDown, TrendingUp, Minus,
  ChevronRight, RotateCcw, Sparkles, CheckCircle2
} from "lucide-react";

interface QuizOption {
  id: string;
  label: string;
  labelHi: string;
  icon: React.ReactNode;
  tags: string[];
}

interface QuizQuestion {
  id: string;
  question: string;
  questionHi: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    id: "family",
    question: "What is your family situation?",
    questionHi: "आपकी पारिवारिक स्थिति क्या है?",
    options: [
      { id: "single", label: "Single / Unmarried", labelHi: "अविवाहित", icon: <User className="w-6 h-6" />, tags: ["single"] },
      { id: "married", label: "Married", labelHi: "विवाहित", icon: <Users className="w-6 h-6" />, tags: ["married", "family"] },
      { id: "with_children", label: "Have Children", labelHi: "बच्चे हैं", icon: <Baby className="w-6 h-6" />, tags: ["children", "family", "girl_child"] },
      { id: "senior", label: "Senior Citizen (60+)", labelHi: "वरिष्ठ नागरिक (60+)", icon: <UserCheck className="w-6 h-6" />, tags: ["senior", "pension"] },
    ]
  },
  {
    id: "occupation",
    question: "What is your occupation?",
    questionHi: "आपका व्यवसाय क्या है?",
    options: [
      { id: "farmer", label: "Farmer / Agriculture", labelHi: "किसान / खेती", icon: <Tractor className="w-6 h-6" />, tags: ["farmer", "agriculture", "rural"] },
      { id: "business", label: "Small Business / Shop", labelHi: "छोटा व्यापार / दुकान", icon: <Store className="w-6 h-6" />, tags: ["business", "entrepreneur", "mudra"] },
      { id: "employee", label: "Job / Employee", labelHi: "नौकरी / कर्मचारी", icon: <Briefcase className="w-6 h-6" />, tags: ["employee", "salaried"] },
      { id: "student", label: "Student", labelHi: "छात्र", icon: <GraduationCap className="w-6 h-6" />, tags: ["student", "education", "scholarship"] },
    ]
  },
  {
    id: "income",
    question: "What is your monthly family income?",
    questionHi: "आपकी मासिक पारिवारिक आय कितनी है?",
    options: [
      { id: "below_10k", label: "Below ₹10,000", labelHi: "₹10,000 से कम", icon: <TrendingDown className="w-6 h-6" />, tags: ["bpl", "low_income", "subsidy", "free"] },
      { id: "10k_25k", label: "₹10,000 - ₹25,000", labelHi: "₹10,000 - ₹25,000", icon: <Minus className="w-6 h-6" />, tags: ["low_income", "subsidy"] },
      { id: "25k_50k", label: "₹25,000 - ₹50,000", labelHi: "₹25,000 - ₹50,000", icon: <IndianRupee className="w-6 h-6" />, tags: ["middle_income"] },
      { id: "above_50k", label: "Above ₹50,000", labelHi: "₹50,000 से ऊपर", icon: <TrendingUp className="w-6 h-6" />, tags: ["high_income"] },
    ]
  },
  {
    id: "housing",
    question: "Do you have your own house?",
    questionHi: "क्या आपका अपना घर है?",
    options: [
      { id: "no_house", label: "No, I don't have", labelHi: "नहीं, मेरा नहीं है", icon: <HomeIcon className="w-6 h-6" />, tags: ["housing", "awas", "homeless"] },
      { id: "kutcha", label: "Kutcha / Temporary", labelHi: "कच्चा / अस्थायी", icon: <HomeIcon className="w-6 h-6" />, tags: ["housing", "awas", "kutcha"] },
      { id: "pucca", label: "Pucca House", labelHi: "पक्का घर", icon: <HomeIcon className="w-6 h-6" />, tags: ["pucca"] },
      { id: "rented", label: "Rented", labelHi: "किराए पर", icon: <HomeIcon className="w-6 h-6" />, tags: ["rented", "housing"] },
    ]
  }
];

// Scheme matching criteria
const schemeMatchingRules: Record<string, string[]> = {
  "pm-kisan": ["farmer", "agriculture", "rural"],
  "pm-awas": ["housing", "awas", "homeless", "kutcha", "bpl", "low_income"],
  "ayushman-bharat": ["bpl", "low_income", "family", "subsidy"],
  "sukanya-samriddhi": ["girl_child", "children", "family"],
  "atal-pension": ["employee", "business", "pension", "senior"],
  "jan-dhan": ["bpl", "low_income", "subsidy", "free"],
  "mudra-loan": ["business", "entrepreneur", "mudra"],
};

const EligibilityCheckerPage = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, tags: string[]) => {
    const newAnswers = { ...answers, [questionId]: tags };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  // Get all user tags from answers
  const getUserTags = (): string[] => {
    return Object.values(answers).flat();
  };

  // Find matching schemes
  const getMatchingSchemes = () => {
    const userTags = getUserTags();
    const schemeService = services.find(s => s.category === "schemes");
    if (!schemeService) return [];

    return schemeService.subServices
      .map(scheme => {
        const matchTags = schemeMatchingRules[scheme.id] || [];
        const matchCount = matchTags.filter(tag => userTags.includes(tag)).length;
        const matchPercentage = matchTags.length > 0 ? (matchCount / matchTags.length) * 100 : 0;
        return { ...scheme, matchCount, matchPercentage, parentId: schemeService.id };
      })
      .filter(scheme => scheme.matchCount > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);
  };

  const currentQuestion = questions[currentStep];
  const matchingSchemes = showResults ? getMatchingSchemes() : [];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={t("योजना पात्रता जांच", "Scheme Eligibility Check")} showBack />
      
      {/* Progress Banner */}
      <div 
        className="relative overflow-hidden py-6 px-4"
        style={{
          background: `linear-gradient(135deg, hsl(280 70% 50%) 0%, hsl(280 70% 35%) 100%)`
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute left-1/3 bottom-0 w-16 h-16 rounded-full bg-white/5" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {showResults 
                  ? t("आपके लिए योजनाएं", "Schemes for You")
                  : t("कुछ सवाल जवाब दें", "Answer a few questions")
                }
              </h2>
              <p className="text-white/80 text-sm">
                {showResults 
                  ? t(`${matchingSchemes.length} योजनाएं मिलीं`, `Found ${matchingSchemes.length} schemes`)
                  : t(`सवाल ${currentStep + 1} / ${questions.length}`, `Question ${currentStep + 1} of ${questions.length}`)
                }
              </p>
            </div>
          </div>
          
          {/* Progress bar */}
          {!showResults && (
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        {!showResults ? (
          /* Quiz Questions */
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {language === "hi" ? currentQuestion.questionHi : currentQuestion.question}
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(currentQuestion.id, option.tags)}
                  className="flex flex-col items-center gap-3 p-4 bg-card rounded-2xl border-2 border-border/50 hover:border-accent hover:bg-accent/5 transition-all duration-200 active:scale-95 opacity-0 animate-scale-up"
                  style={{ animationDelay: `${0.1 + index * 0.05}s`, animationFillMode: 'forwards' }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {option.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground text-center leading-tight">
                    {language === "hi" ? option.labelHi : option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Results */
          <div>
            {matchingSchemes.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                    {t("आपके लिए सुझाई गई योजनाएं", "Recommended Schemes")}
                  </h3>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1.5 text-sm text-accent font-medium opacity-0 animate-fade-up"
                    style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t("फिर से", "Retry")}
                  </button>
                </div>
                
                <div className="space-y-3">
                  {matchingSchemes.map((scheme, index) => (
                    <div key={scheme.id} className="relative opacity-0 animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.05}s`, animationFillMode: 'forwards' }}>
                      {/* Match indicator */}
                      <div className="absolute -left-1 top-4 z-10">
                        <div className="flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-r-full shadow-md">
                          <CheckCircle2 className="w-3 h-3" />
                          {Math.round(scheme.matchPercentage)}%
                        </div>
                      </div>
                      <SubServiceCard
                        title={scheme.title}
                        titleHi={scheme.titleHi}
                        description={scheme.description}
                        onClick={() => navigate(`/service/${scheme.parentId}/${scheme.id}`)}
                        delay={0}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("कोई मिलती योजना नहीं मिली", "No matching schemes found")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t("सभी योजनाएं देखें और खुद चुनें", "Browse all schemes and choose yourself")}
                </p>
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-xl font-medium"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t("फिर से कोशिश करें", "Try Again")}
                </button>
              </div>
            )}
            
            {/* View all schemes button */}
            <button
              onClick={() => navigate("/schemes")}
              className="w-full mt-6 flex items-center justify-center gap-2 p-4 bg-card rounded-xl border border-border text-foreground font-medium hover:bg-accent/5 transition-colors opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              {t("सभी योजनाएं देखें", "View All Schemes")}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default EligibilityCheckerPage;
