export const contactData = {
  title: "Entrons en contact",
  subtitles: [
    "Un premier contact ne vous engage à rien.",
    "Je serai ravi de répondre à vos questions et de vous orienter dans votre démarche.",
  ],
  form: {
    fields: [
      {
        id: "name",
        name: "name",
        type: "text",
        label: "Nom",
        required: true,
      },
      {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        required: true,
      },
      {
        id: "phone",
        name: "phone",
        type: "text",
        label: "Téléphone",
        required: true,
      },
      {
        id: "message",
        name: "message",
        type: "textarea",
        label: "Votre message",
        required: true,
      },
    ],
    submitButton: {
      text: "Discutons de votre projet",
    },
  },
};
