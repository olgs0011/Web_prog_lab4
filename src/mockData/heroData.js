import IllustrationSvg from "../assets/img/Illustration.svg";
import AvatarsSvg from "../assets/img/avatars.svg";

export const heroCtaButtons = [
  {
    type: "input",
    title: "Введите Email",
  },
  {
    type: "button",
    title: "Начать",
  },
];

export const illustration = {
  src: IllustrationSvg,
  alt: "gpt4",
};

export const header = "Построим Что-нибудь Невероятное с GPT-4 OpenAI";

export const description =
  "Однако кровать для помощи в путешествии неприятна. Не мысли все осуществляют благословение. Снисхождение ко всему, радость, изменение бурной привязанности. Вечеринку мы лет на заказ разрешил";

export const socialApprove = {
  avatars: {
    src: AvatarsSvg, // Используем импортированный SVG
    alt: "avatars"
  },
  text: "1,600 человек запросило доступ за последние 24 часа"
};

export const heroData = {
  header,
  description,
  heroCtaButtons,
  illustration,
  socialApprove,
};
