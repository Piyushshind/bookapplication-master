
const initialState = [

    {
      id: 1,
      name: "Motivational",
      authorName: "Sandip",
      price: "120Rs",
      image:"https://c4.wallpaperflare.com/wallpaper/302/456/881/quote-books-keep-calm-and-motivational-wallpaper-preview.jpg",
      details: "A book that inspires and motivates readers to achieve their goals. With practical examples and actionable advice, this motivational masterpiece is a must-read. Dive into its pages and unlock your true potential. Pages: 200."
    },
    {
      id: 2,
      name: "Diet Book",
      authorName: "Vidya Kapoor",
      price: "323Rs",
      image:"https://static1.squarespace.com/static/5540f979e4b0748aa30e2826/t/61a66566e004e72ec26def91/1638294892625/Anti-Diet+Book+Cover+-+3D+-+Blank+Background.png?format=1500w",
      details: "Embark on a transformative journey with this comprehensive diet book. Learn about proper nutrition, meal planning, and healthy habits that will change your life. Packed with delicious recipes and expert tips, this guidebook offers a sustainable approach to weight loss. Pages: 300."
    },
    {
      id: 3,
      name: "Sports",
      authorName: "Sachin",
      price: "220Rs",
      image:"https://www.jagranimages.com/images/newimg/23042023/23_04_2023-sachin_world_cup_trophy_23393532.webp",
      details: "Delve into the world of sports and discover its profound impact on individuals and society. From legendary athletes to the transformative power of teamwork, this book explores various sports and their enduring legacies. Gain insights into the triumphs and challenges of athletic pursuits. Pages: 250."
    },
    {
      id: 4,
      name: "Fictional Adventure",
      authorName: "Emily Smith",
      price: "180Rs",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-8LO4szUzTkO_NkGeqvhhp1uVWXFSy_ljA&usqp=CAU",
      details: "Embark on a thrilling fictional adventure that will keep you on the edge of your seat. Follow the protagonist's journey through dangerous landscapes, treacherous encounters, and unexpected twists. With vivid descriptions and compelling characters, this book will transport you to a world of excitement. Pages: 350."
    },
    {
      id: 5,
      name: "Historical Perspectives",
      authorName: "David Johnson",
      price: "250Rs",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKeSVEKkUomGPp6sHnM3BrJkoSu4JlLeTmg&usqp=CAU",
      details: "Uncover hidden narratives and explore history from diverse perspectives. This insightful book sheds light on lesser-known events and offers fresh insights into familiar historical periods. With meticulous research and engaging storytelling, it illuminates the complexity of the past. Pages: 400."
    },
    {
      id: 6,
      name: "Science Fiction",
      authorName: "Jennifer Anderson",
      price: "190Rs",
      image:"https://t4.ftcdn.net/jpg/00/44/03/65/360_F_44036518_Os2R2YvxNxMshxGgPC3WitzFRw6sWVek.jpg",
      details: "Immerse yourself in a world of scientific wonders and futuristic possibilities. This captivating science fiction novel takes you on a thrilling journey through space and time. Explore imaginative concepts, mind-bending technologies, and the intricate relationship between humanity and the universe. Pages: 280."
    },
    {
      id: 7,
      name: "Self-Help Guide",
      authorName: "Robert Williams",
      price: "150Rs",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOH2z6Bk9E--qfgCKnlXUXXV6zgmgxNRcY2FoZEA8_8A&s",
      details: "Unlock your full potential and cultivate personal growth with this practical self-help guide. Discover effective strategies to overcome challenges, develop positive habits, and improve your overall well-being. Packed with actionable advice and inspiring anecdotes, this book is a valuable companion on your journey to self-improvement. Pages: 220."
    },
    {
      id: 8,
      name: "Romantic Comedy",
      authorName: "Sophie Johnson",
      price: "210Rs",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLtq9gcXcV5-tleSojXaQsp4ip7thbTPVe_L26S1O_A&s",
      details: "Indulge in a heartwarming romantic comedy that will make you laugh, sigh, and believe in love. Follow the hilarious antics and heart-tugging moments of the main characters as they navigate the unpredictable landscape of relationships. This delightful story is guaranteed to leave you with a smile on your face. Pages: 320."
    },
    {
      id: 9,
      name: "Business Strategies",
      authorName: "Michael Davis",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9Q5fK1HrTRzAusogy6DoFXZQGCanzfaLaw&usqp=CAU",
      price: "280Rs",
      details: "Stay ahead of the competition and navigate the ever-changing business landscape with this comprehensive guide to effective strategies. From marketing techniques to leadership principles, this book provides valuable insights and practical tips for success. Gain a competitive edge and achieve your business goals. Pages: 380."
    },
    {
      id: 10,
      name: "Mystery Thriller",
      authorName: "Emma Wilson",
      price: "195Rs",
      image:"https://www.shutterstock.com/image-vector/vector-sign-mystery-thriller-book-600w-582134149.jpg",
      details: "Immerse yourself in a gripping mystery filled with suspense, twists, and a race against time. Follow the protagonist's relentless pursuit of truth as they unravel a web of secrets and deception. With unpredictable plot twists and a compelling narrative, this thriller will keep you guessing until the very end. Pages: 300."
    },
    {
      id: 11,
      name: "Biography: Inspiring Lives",
      authorName: "Daniel Roberts",
      price: "175Rs",
      image:"https://images-platform.99static.com//9I0OWM6sE2sQbZce93rjSMfcoj0=/424x1579:1605x2760/fit-in/590x590/99designs-contests-attachments/119/119645/attachment_119645137",
      details: "Discover the extraordinary lives of remarkable individuals who made a lasting impact. This collection of inspiring biographies celebrates the achievements, struggles, and legacy of influential figures from various fields. Experience their triumphs and setbacks through engaging storytelling and insightful anecdotes. Pages: 280."
    },
    {
      id: 12,
      name: "Fantasy World",
      authorName: "Oliver Thompson",
      price: "225Rs",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TxvmxzmndD833MEgUYdrGfeJfo4qtxrTyOTDDweQ&s",
      details: "Escape to a captivating fantasy world filled with magic, mythical creatures, and epic quests. Join the brave heroes on their extraordinary adventures as they battle dark forces and uncover ancient prophecies. Immerse yourself in a richly imagined realm where imagination knows no bounds. Pages: 400."
    },
    {
      id: 13,
      name: "Travel Guide",
      authorName: "Sarah Anderson",
      price: "145Rs",
      image:"https://www.nomadicmatt.com/wp-content/uploads/2018/11/NM_Guide_to_Paris_Flat_sm.jpg",
      details: "Embark on a journey around the world with this comprehensive travel guide. Discover hidden gems, iconic landmarks, and cultural treasures across different continents. Get insider tips, detailed itineraries, and recommendations for unforgettable experiences. Whether you're an avid traveler or planning your first trip, this book is your ultimate companion. Pages: 320."
    },
    {
      id: 14,
      name: "Psychological Thriller",
      authorName: "Matthew Harris",
      price: "205Rs",
      image:"https://images-platform.99static.com//i74rnyqL6CFq6bcU2_bzyqiLAX0=/1118x0:3815x2697/fit-in/590x590/projects-files/157/15730/1573054/175adb7c-3e22-4ada-b295-069d4041de2a.jpg",
      details: "Immerse yourself in an intense psychological thriller that delves into the depths of the human mind. Follow the complex characters as they navigate twisted relationships, dark secrets, and psychological turmoil. With suspenseful twists and intricate plotting, this book will keep you captivated until the final page. Pages: 360."
    },
    {
      id: 15,
      name: "Cooking Delights",
      authorName: "Julia Roberts",
      price: "240Rs",
      image:"https://c4.wallpaperflare.com/wallpaper/662/732/5/baking-book-cookbook-cooking-wallpaper-preview.jpg",
      details: "Embark on a culinary adventure with this delightful cooking book. From mouthwatering recipes to helpful cooking techniques, this guide is a treasure trove for food enthusiasts. Explore a variety of cuisines, experiment with flavors, and impress your family and friends with delicious homemade meals. Pages: 280."
    },
    {
        id: 16,
        name: "Romance: Love in Paris",
        authorName: "Sophie Johnson",
        price: "199Rs",
        image:"https://c4.wallpaperflare.com/wallpaper/221/278/507/girl-hair-the-game-paris-wallpaper-preview.jpg",
        details: "Indulge in a captivating love story set against the backdrop of the enchanting city of Paris. Follow the journey of two souls as they navigate the complexities of romance, heartbreak, and self-discovery. Lose yourself in the magic of Parisian streets, quaint cafes, and the power of true love. Pages: 320."
        },
        
        {
        id: 17,
        name: "Thriller: The Silent Witness",
        authorName: "David Thompson",
        price: "249Rs",
        image:"https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
        details: "Immerse yourself in a gripping tale of suspense and mystery with 'The Silent Witness.' Uncover the truth behind a baffling crime as a relentless detective races against time. With each twist and turn, secrets are revealed, and the stakes get higher. Prepare for a heart-pounding journey that will keep you on the edge of your seat. Pages: 400."
        },
        
        {
        id: 18,
        name: "Fantasy: The Kingdom of Dreams",
        authorName: "Sarah Anderson",
        price: "299Rs",
        image:"https://c1.wallpaperflare.com/preview/957/331/594/castle-fairy-tale-kingdom-princess.jpg",
        details: "Step into a realm of fantasy and wonder with 'The Kingdom of Dreams.' Join the young hero on an epic quest filled with mythical creatures, ancient prophecies, and battles against darkness. Experience a world where dreams come alive and imagination knows no bounds. Let the adventure unfold. Pages: 450."
        },
        
        {
        id: 19,
        name: "Historical Fiction: Shadows of the Past",
        authorName: "Robert Wilson",
        price: "199Rs",
        image:"https://c4.wallpaperflare.com/wallpaper/917/245/80/anime-demon-slayer-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-preview.jpg",
        details: "Travel through time and witness the echoes of history in 'Shadows of the Past.' Immerse yourself in richly detailed settings and vivid characters from bygone eras. Uncover hidden secrets, witness historic events, and explore the human stories woven within the tapestry of time. Pages: 380."
        },
        {
            id: 20,
            name: "Biography: Inspiring Lives",
            authorName: "Daniel Roberts",
            price: "175Rs",
            image:"https://mcdn.wallpapersafari.com/medium/87/61/3c86Rs.jpg",
            details: "Discover the extraordinary lives of remarkable individuals who made a lasting impact. This collection of inspiring biographies celebrates the achievements, struggles, and legacy of influential figures from various fields. Experience their triumphs and setbacks through engaging storytelling and insightful anecdotes. Pages: 280."
            },
            
            {
            id: 21,
            name: "Fiction: The Enchanted Forest",
            authorName: "Emily Williams",
            price: "250Rs",
            image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626119277i/58544640.jpg",
            details: "Step into a world of enchantment and magic with The Enchanted Forest. Join the protagonist on a thrilling adventure through a mystical land filled with mythical creatures, ancient secrets, and hidden treasures. Experience the power of imagination as the story unfolds with captivating twists and turns. Pages: 400."
            },
            
            {
            id: 22,
            name: "Mystery: The Secret Cipher",
            authorName: "Sarah Johnson",
            price: "199Rs",
            image:"",
            details: "Embark on a suspenseful journey with The Secret Cipher. Follow the protagonist as they unravel a complex web of clues, cryptic messages, and hidden codes in their quest to solve a baffling mystery. Delve into a world of intrigue, deception, and unexpected revelations. Will you decipher the secret? Pages: 320."
            },
            
            {
            id: 23,
            name: "Science Fiction: Beyond the Stars",
            authorName: "Michael Anderson",
            price: "299Rs",
            image:"",
            details: "Explore the limitless possibilities of the universe in Beyond the Stars. Set in a future where technology and imagination collide, this gripping science fiction novel takes you on a thrilling interstellar adventure. Brace yourself for mind-bending concepts, alien encounters, and thought-provoking explorations of the human condition. Pages: 450."
            },
            
            {
            id: 24,
            name: "Self-Help: The Power Within",
            authorName: "Jennifer Davis",
            price: "149Rs",
            image:"",
            details: "Unlock your true potential and discover The Power Within. This empowering self-help book offers practical strategies, insightful advice, and exercises to help you overcome obstacles, develop positive habits, and cultivate a mindset of success. Pages: 220."
            },
            
            {
            id: 25,
            name: "Romance: A Love to Remember",
            authorName: "Emma Thompson",
            price: "199Rs",
            image:"",
            details: "Experience a heartwarming tale of love and second chances in A Love to Remember. Follow the journey of two souls as they rediscover the power of love and heal old wounds. This emotional and captivating romance novel will tug at your heartstrings and leave you with a renewed belief in the magic of love. Pages: 320."
            },
            
            {
            id: 26,
            name: "Historical Fiction: The Forgotten Kingdom",
            authorName: "Thomas Wilson",
            price: "189Rs",
             image:"",
            details: "Step back in time and immerse yourself in the rich historical tapestry of The Forgotten Kingdom. Journey through ancient lands, witness epic battles, and encounter remarkable characters. This meticulously researched historical fiction novel will transport you to a bygone era and ignite your imagination. Pages: 400."
            },
            
            {
            id: 27,
            name: "Fantasy: The Realm of Legends",
            authorName: "Sophie Anderson",
            price: "249Rs",
            details: "Embark on an epic fantasy adventure in The Realm of Legends. Join the young hero on"
            }  , 
    
  ];

  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  
  export default bookReducer;