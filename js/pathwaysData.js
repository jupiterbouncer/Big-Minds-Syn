/* ==========================================================================
   Big Minds — Web Technologies Synthesis Edition
   Description: Holds dataset for interest pathways and quiz questions.
   ========================================================================== */

// Master dataset for the 5 mentorship interest pathways
const pathwaysData = [
    {
        id: 'programming',
        name: 'Programming & Web',
        icon: '💻',
        category: 'Technology & Logic',
        shortDesc: 'Learn how computers follow code instructions to build interactive websites, games, and applications.',
        skills: ['Logical Thinking', 'Problem Solving', 'HTML/CSS Basics'],
        activityTitle: 'Interactive Web Color & Text Changer',
        activityDesc: 'See how JavaScript changes a webpage live when you click buttons!',
        nextSteps: 'Experiment with HTML tags or try block-based coding tools like Scratch.'
    },
    {
        id: 'design',
        name: 'Graphic Design',
        icon: '🎨',
        category: 'Creative Arts',
        shortDesc: 'Combine colors, shapes, typography, and imagery to visually communicate ideas and inspire people.',
        skills: ['Visual Creativity', 'Color Harmony', 'Layout Design'],
        activityTitle: 'Mentorship Poster Theme Studio',
        activityDesc: 'Customize the visual theme of a mentorship poster by picking color palettes.',
        nextSteps: 'Sketch a poster on paper or explore free digital design tools.'
    },
    {
        id: 'finance',
        name: 'Financial Literacy',
        icon: '💰',
        category: 'Money Management',
        shortDesc: 'Understand how money works by learning how to budget, save, and make smart spending choices.',
        skills: ['Budgeting', 'Savings Planning', 'Basic Math'],
        activityTitle: 'GHS 100 Allowance Allocator',
        activityDesc: 'Divide a hypothetical GHS 100 allowance between savings and spending.',
        nextSteps: 'Set a real savings goal for a school book or item you want.'
    },
    {
        id: 'speaking',
        name: 'Public Speaking',
        icon: '🎤',
        category: 'Communication',
        shortDesc: 'Express your thoughts confidently, present ideas clearly, and inspire others with your voice.',
        skills: ['Confidence', 'Speech Structure', 'Active Listening'],
        activityTitle: '1-Minute Speech Outline Builder',
        activityDesc: 'Draft a short structured speech with an opener, main points, and a conclusion.',
        nextSteps: 'Practice delivering your short speech aloud to a classmate or family member.'
    },
    {
        id: 'entrepreneurship',
        name: 'Entrepreneurship',
        icon: '🚀',
        category: 'Business & Leadership',
        shortDesc: 'Turn creative ideas into real products, solve community problems, and run a mini business.',
        skills: ['Innovation', 'Profit Calculation', 'Leadership'],
        activityTitle: 'Chop Bar Profit Estimator',
        activityDesc: 'Calculate production cost, selling price, and profit per item for a local snack stand.',
        nextSteps: 'Brainstorm a simple craft or food item you could sell at a school fair.'
    }
];

// Master dataset for the Curiosity Quiz (5 Questions)
const quizQuestions = [
    {
        id: 1,
        question: "When you have free time at school or home, what do you enjoy doing most?",
        options: [
            { text: "Solving math puzzles or exploring how computers and apps work.", area: "programming" },
            { text: "Drawing, painting, or making things look visually beautiful.", area: "design" },
            { text: "Counting your coins and planning how to save for something special.", area: "finance" },
            { text: "Telling stories, acting, or sharing ideas with a group of friends.", area: "speaking" },
            { text: "Thinking of fun things to make and sell to your classmates.", area: "entrepreneurship" }
        ]
    },
    {
        id: 2,
        question: "If your class is planning a special school event, which role would you pick?",
        options: [
            { text: "Creating a simple website or digital slide show for the event.", area: "programming" },
            { text: "Designing colorful posters, banners, and invitation cards.", area: "design" },
            { text: "Managing the ticket money and keeping track of the event budget.", area: "finance" },
            { text: "Serving as the Master of Ceremonies (MC) and giving welcome speeches.", area: "speaking" },
            { text: "Setting up a food or snack table and deciding the selling prices.", area: "entrepreneurship" }
        ]
    },
    {
        id: 3,
        question: "Which of these hands-on projects sounds most exciting to try?",
        options: [
            { text: "Writing code instructions to make a button change colors on a screen.", area: "programming" },
            { text: "Testing different color schemes and logos for a youth club.", area: "design" },
            { text: "Calculating how much money you save if you save GHS 5 every week.", area: "finance" },
            { text: "Writing a short speech about protecting the environment in Lapaz.", area: "speaking" },
            { text: "Calculating profit for a local lemonade or Sobolo stand.", area: "entrepreneurship" }
        ]
    },
    {
        id: 4,
        question: "What is a skill you would love to practice and get better at?",
        options: [
            { text: "Understanding computer languages and building digital tools.", area: "programming" },
            { text: "Arranging text and visual graphics cleanly on a page.", area: "design" },
            { text: "Making smart financial decisions and avoiding wasteful spending.", area: "finance" },
            { text: "Speaking boldly without feeling nervous in front of an audience.", area: "speaking" },
            { text: "Starting a small business and leading a creative team.", area: "entrepreneurship" }
        ]
    },
    {
        id: 5,
        question: "Which phrase best describes how your mind works?",
        options: [
            { text: "Logical and step-by-step — I love figuring out how systems function.", area: "programming" },
            { text: "Artistic and visual — I notice colors, patterns, and shapes everywhere.", area: "design" },
            { text: "Practical and organized — I like tracking numbers and planning ahead.", area: "finance" },
            { text: "Expressive and social — I love communicating and sharing stories.", area: "speaking" },
            { text: "Resourceful and adventurous — I love creating value and new opportunities.", area: "entrepreneurship" }
        ]
    }
];