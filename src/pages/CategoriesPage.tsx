import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { categories } from "@/data/services";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="All Categories" showBack />
      
      <main className="px-4 py-6">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/service/${category.id}`)}
                className="bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all flex flex-col items-center gap-3 text-center animate-fade-up touch-action-manipulation active:scale-[0.98]"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {category.nameHi}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {category.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CategoriesPage;
