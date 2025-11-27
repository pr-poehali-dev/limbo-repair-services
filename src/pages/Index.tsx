import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  const services = [
    {
      icon: "Smartphone",
      title: "Ремонт смартфонов",
      description: "iPhone, Samsung, Xiaomi и других брендов",
      features: ["Замена экрана", "Ремонт платы", "Замена батареи", "Восстановление после воды"]
    },
    {
      icon: "Laptop",
      title: "Ремонт техники",
      description: "Ноутбуки, планшеты, умные часы",
      features: ["Диагностика", "Чистка", "Замена компонентов", "Прошивка"]
    },
    {
      icon: "DollarSign",
      title: "Услуги ломбарда",
      description: "Деньги под залог телефонов",
      features: ["Быстрая оценка", "Выгодные проценты", "Гибкие условия", "Конфиденциальность"]
    }
  ];

  const prices = [
    { service: "Диагностика", price: "Бесплатно" },
    { service: "Замена экрана iPhone", price: "от 3 000 ₽" },
    { service: "Замена батареи", price: "от 1 500 ₽" },
    { service: "Ремонт платы", price: "от 2 000 ₽" },
    { service: "Залог телефона", price: "до 70% стоимости" }
  ];

  const guarantees = [
    { icon: "Shield", text: "Гарантия на все виды работ" },
    { icon: "Clock", text: "Ремонт за 30-60 минут" },
    { icon: "CheckCircle", text: "Оригинальные запчасти" },
    { icon: "Award", text: "Сертифицированные мастера" }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-gradient">LIMBO</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#repair" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ремонт</a>
              <a href="#pawnshop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ломбард</a>
              <a href="#prices" className="text-sm text-muted-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <Button size="sm" className="glow-effect">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Профессиональный сервис
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Ремонт техники <br />
              <span className="text-gradient">нового поколения</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Быстрый и качественный ремонт смартфонов любых брендов. Услуги ломбарда с выгодными условиями.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 glow-effect hover-scale">
                <Icon name="Wrench" size={20} className="mr-2" />
                Заказать ремонт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                <Icon name="DollarSign" size={20} className="mr-2" />
                Оценить залог
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {guarantees.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={item.icon} size={24} className="text-primary" />
                  </div>
                  <p className="text-sm text-center">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг для вашей техники</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-effect">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <Separator className="mb-4" />
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-6 group-hover:glow-effect" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="repair" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                <Icon name="Wrench" size={14} className="mr-1" />
                Ремонт
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Ремонт любой <span className="text-gradient">сложности</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Работаем с iPhone, Samsung, Xiaomi и другими брендами. Используем только оригинальные запчасти и современное оборудование.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <Icon name="Smartphone" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Замена экрана</h4>
                    <p className="text-sm text-muted-foreground">Оригинальные дисплеи с гарантией качества</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <Icon name="Battery" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Замена батареи</h4>
                    <p className="text-sm text-muted-foreground">Продлим жизнь вашего устройства</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <Icon name="Cpu" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Ремонт платы</h4>
                    <p className="text-sm text-muted-foreground">Микросхемная пайка любой сложности</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="mt-8 glow-effect hover-scale">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на ремонт
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 p-1 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/4f180a0e-8166-4166-89ee-b05597c966d9/files/289ad605-a17c-49ab-b0a7-7d78f98acc40.jpg" 
                  alt="Ремонт смартфонов"
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect animate-pulse">
                <div className="text-center">
                  <div className="text-3xl font-bold">30</div>
                  <div className="text-xs">минут</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pawnshop" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1 animate-scale-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary/20 via-primary/20 to-secondary/20 p-1 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/4f180a0e-8166-4166-89ee-b05597c966d9/files/0b58324f-7cea-4192-a3db-33147216d0e8.jpg" 
                  alt="Ломбард"
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-32 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center glow-effect">
                <div className="text-center">
                  <div className="text-3xl font-bold">до 70%</div>
                  <div className="text-xs">от стоимости</div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 animate-fade-in">
              <Badge variant="outline" className="mb-4 border-secondary/50 text-secondary">
                <Icon name="DollarSign" size={14} className="mr-1" />
                Ломбард
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Деньги под залог <span className="text-gradient">техники</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Принимаем смартфоны Apple, Samsung, Xiaomi и другие популярные бренды. Быстрая оценка и выдача средств.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <Icon name="Zap" size={32} className="text-secondary mb-3" />
                  <div className="text-2xl font-heading font-bold mb-1">15 минут</div>
                  <p className="text-sm text-muted-foreground">Оценка и выдача</p>
                </div>
                
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <Icon name="TrendingUp" size={32} className="text-secondary mb-3" />
                  <div className="text-2xl font-heading font-bold mb-1">Выгодно</div>
                  <p className="text-sm text-muted-foreground">Низкие проценты</p>
                </div>
              </div>
              
              <Button size="lg" className="glow-effect hover-scale">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать залог
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Цены на услуги</h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>

          <Card className="overflow-hidden animate-slide-up bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              {prices.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-6 hover:bg-muted/30 transition-colors border-b border-border/50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">{item.service}</span>
                  </div>
                  <span className="text-xl font-heading font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/30 animate-scale-in">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-heading font-semibold mb-2">Бесплатная диагностика</h4>
                <p className="text-sm text-muted-foreground">
                  Точную стоимость ремонта определим после бесплатной диагностики вашего устройства
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">О сервисе LIMBO</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Мы создали пространство, где технологии встречаются с профессионализмом. 
              Наша команда сертифицированных мастеров обеспечивает высочайшее качество ремонта 
              с использованием современного оборудования и оригинальных запчастей.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-slide-up">
                <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold text-gradient mb-2">5+</div>
                <p className="text-muted-foreground">Лет на рынке</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-bold text-gradient mb-2">98%</div>
                <p className="text-muted-foreground">Успешных ремонтов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами для ремонта или оценки вашей техники
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 glow-effect hover-scale">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                <Icon name="MapPin" size={20} className="mr-2" />
                Наш адрес
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={18} className="text-white" />
              </div>
              <span className="font-heading font-bold text-gradient">LIMBO</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 LIMBO. Все права защищены.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover-scale">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}