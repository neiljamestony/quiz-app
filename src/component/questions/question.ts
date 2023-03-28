import { QuestionsInterface, CategoryInterface } from "../../interface/redux";
import ScienceIcon from "../../assets/img/science.gif";
import AnimalsIcon from "../../assets/img/pawprint.gif";
import PHHistoryIcon from "../../assets/img/history.gif";
export const questionsArr: QuestionsInterface[] = [
  {
    question: `Which author wrote 'Coraline'?`,
    answer: "Neil Gaiman",
    options: [
      "Neil Gaiman",
      "Stephen King",
      "H. P. Lovecraft",
      "Douglas Adams",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the nickname of the English football team Preston North End?`,
    answer: "The Lilywhites",
    options: ["The Lilywhites", "The Blades", "The Blues", "Douglas Adams"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which pasta's name means 'to hollow'?`,
    answer: "Cavatelli",
    options: ["Rotelle", "Cavatelli", "Vermicelli", "Pappardelle"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which president signed the Civil Rights Act of 1964??`,
    answer: "Lyndon B. Johnson",
    options: [
      "John F. Kennedy",
      "Lyndon B. Johnson",
      "Richard Nixon",
      "Jimmy Carter",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which of these countries borders Andorra?`,
    answer: "France",
    options: ["France", "Monaco", "Switzerland", "Luxembourg"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which of these brands has a eagle on its logo?`,
    answer: "Giorgio Armani",
    options: ["Giorgio Armani", "Lacoste", "Tripadvisor", "Bacardi"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which US state is divided into two parts by a large lake?`,
    answer: "Michigan",
    options: ["Michigan", "Ohio", "Minnesota", "Wisconsin"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What pastry is used to make profittaroles?`,
    answer: "Choux",
    options: ["Filo", "Puff", "Choux", "Flaky"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is Felinology the study of?`,
    answer: "cats",
    options: ["oceans", "cats", "the lymph system and glands", "angels"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which of these brands has a bull on its logo?`,
    answer: "Lamborghini",
    options: ["Lamborghini", "Linux", "Hermès", "Tripadvisor"],
    status: "pending",
    isCorrect: false,
  },
];

export const Animals: QuestionsInterface[] = [
  {
    question: `What is the largest land animal?`,
    answer: "Elephant",
    options: ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the fastest land animal?`,
    answer: "Cheetah",
    options: ["Cheetah", "Lion", "Gazelle", "Zebra"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the smallest mammal in the world?`,
    answer: "Bat",
    options: ["Bat", "Mouse", "Shrew", "Hamster"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the most venomous snake in the world?`,
    answer: "Inland taipan",
    options: ["Inland taipan", "Black mamba", "King cobra", "Rattlesnake"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the only mammal capable of sustained flight?`,
    answer: "Bat",
    options: ["Bat", "Flying squirrel", "Pterodactyl", "Gliding possum"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What animal is known as the 'king of the jungle'?`,
    answer: "Lion",
    options: ["Lion", "Tiger", "Elephant", "Gorilla"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the only continent without native reptiles or snakes?`,
    answer: "Antarctica",
    options: ["Antarctica", "Australia", "South America", "Africa"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the largest species of shark?`,
    answer: "Whale shark",
    options: [
      "Whale shark",
      "Great white shark",
      "Tiger shark",
      "Hammerhead shark",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the largest bird in the world?`,
    answer: "Ostrich",
    options: ["Ostrich", "Eagle", "Albatross", "Condor"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the fastest water animal?`,
    answer: "Sailfish",
    options: ["Sailfish", "Killer whale", "Dolphin", "Swordfish"],
    status: "pending",
    isCorrect: false,
  },
];

export const PhilippineHistory: QuestionsInterface[] = [
  {
    question: `In which year was Martial Law declared in the Philippines?`,
    answer: "1972",
    options: ["1972", "1965", "1986", "2016"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `How old was Jose Rizal when he was executed?`,
    answer: "36",
    options: ["45", "50", "36", "28"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which of these isn’t a written work of Jose Rizal?`,
    answer: "Aves De Rapina",
    options: [
      "Aves De Rapina",
      "Mi Ultimo Adios",
      "El Filibusterismo",
      "Noli Me Tangere",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `In what year did the Philippine Revolution against Spain begin?`,
    answer: "1896",
    options: ["1896", "1901", "1890", "1861"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which of these wasn’t a President of the Philippines?`,
    answer: "Jose Abad Santos",
    options: [
      "Jose Abad Santos",
      "Carlos P Garcia",
      "Elpidio Quirino",
      "Manuel Roxas",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `In which year did Magellan discover the Philippines?`,
    answer: "1521",
    options: ["1521", "1571", "1600", "1611"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `On what date was Philippine Independence proclaimed?`,
    answer: "June 12, 1898",
    options: [
      "June 26, 1898",
      "June 12, 1898",
      "June 12, 1901",
      "July 4, 1898",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `What is the name of the script widely used in Luzon before the adaptation of the Latin Alphabet?`,
    answer: "Baybayin",
    options: ["Baybayin", "Cuneiform", "Tangut", "Nandinagari"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `In which year were the Gomburza priests executed?`,
    answer: "1872",
    options: ["1872", "1898", "1896", "1862"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: `Which of these Filipino historical figures didn’t start a rebellion against Spain?`,
    answer: "Kapitan Tiago",
    options: [
      "Kapitan Tiago",
      "Diego Silang",
      "Francisco Dagohoy",
      "Andres Malong",
    ],
    status: "pending",
    isCorrect: false,
  },
];

export const Science: QuestionsInterface[] = [
  {
    question: "What is the smallest bone in the human body?",
    answer: "Stapes",
    options: ["Stapes", "Femur", "Tibia", "Humerus"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the function of the pancreas?",
    answer: "Produces insulin",
    options: [
      "Produces insulin",
      "Digests food",
      "Pumps blood",
      "Cleanses blood",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the largest organ in the human body?",
    answer: "Skin",
    options: ["Brain", "Skin", "Liver", "Lungs"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the function of the cerebellum?",
    answer: "Controls movement",
    options: [
      "Controls movement",
      "Regulates body temperature",
      "Controls thirst",
      "Regulates sleep",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the normal resting heart rate for adults?",
    answer: "60-80 bpm",
    options: ["60-80 bpm", "100-120 bpm", "140-160 bpm", "180-200 bpm"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the function of the lymphatic system?",
    answer: "Fights infection",
    options: [
      "Fights infection",
      "Transports oxygen",
      "Filters blood",
      "Digests food",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question:
      "What is the name of the muscle that separates the chest and abdominal cavity?",
    answer: "Diaphragm",
    options: ["Biceps", "Rectus abdominis", "Latissimus dorsi", "Diaphragm"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the function of the thyroid gland?",
    answer: "Regulates metabolism",
    options: [
      "Regulates metabolism",
      "Produces insulin",
      "Controls hunger",
      "Regulates sleep",
    ],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the name of the tube that carries air to the lungs?",
    answer: "Trachea",
    options: ["Bronchi", "Trachea", "Esophagus", "Pharynx"],
    status: "pending",
    isCorrect: false,
  },
  {
    question: "What is the name of the pigment that gives skin its color?",
    answer: "Melanin",
    options: ["Melatonin", "Melanin", "Serotonin", "Endorphins"],
    status: "pending",
    isCorrect: false,
  },
];

export const categories: CategoryInterface[] = [
  {
    category: "Animals",
    questions: Animals,
    icon: AnimalsIcon,
  },
  {
    category: "Philippine History",
    questions: PhilippineHistory,
    icon: PHHistoryIcon,
  },
  {
    category: "Science",
    questions: Science,
    icon: ScienceIcon,
  },
];
