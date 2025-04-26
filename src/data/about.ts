import ProfilePicture from "../assets/pictures/profile_picture.jpg";

export const aboutData = {
  title: "À propos",
  profile: {
    picture: ProfilePicture,
    pictureAlt: "Photo de profil de Kévin Wolff",
    name: "Kévin Wolff",
    role: "Entrepreneur et concepteur web",
    paragraphs: [
      {
        text: "Je suis convaincu que dans chaque organisations, quelques leviers bien identifiés suffisent à débloquer tout le reste. Mon rôle est d'identifier ces leviers avec vous, et de concevoir un outil digital qui les rend simples, fluides et performants.",
        strongParts: [
          "quelques leviers bien identifiés suffisent à débloquer tout le reste",
          "un outil digital qui les rend simples, fluides et performants"
        ]
      },
      {
        text: "Je conçois des applications qui automatisent l'essentiel, pour que vous puissiez avancer plus vite, avec moins d'efforts, et concentrer votre énergie sur votre activité, pas sur vos outils.",
        strongParts: [
          "automatisent l'essentiel"
        ]
      }
    ]
  }
}; 