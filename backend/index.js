import express from 'express';

const server=express();
const port =process.env.PORT || 3000;

server.get('/',(req,res)=>{
    res.send('<h1>Hello Jokes World</h1>');
});

server.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          "id": 1,
          "title": "The Mathematician's Lunch",
          "content": "Why did the mathematician bring a ladder to lunch? Because he heard the pie was 3.14 meters high!"
        },
        {
          "id": 2,
          "title": "The Shy Printer",
          "content": "Why was the printer shy? Because it had too many pages to come out!"
        },
        {
          "id": 3,
          "title": "The Sneezing Cow",
          "content": "What do you call a cow that can't stop sneezing? Beef jerky!"
        },
        {
          "id": 4,
          "title": "The Forgetful Baker",
          "content": "Why did the baker forget to make bread? He couldn't remember the recipe; it kept slipping his mind!"
        },
        {
          "id": 5,
          "title": "The Traffic Light",
          "content": "Why did the traffic light turn red? You would too if you had to change in the middle of the street!"
        },
        {
          "id": 6,
          "title": "The Broken Pencil",
          "content": "Why was the pencil sad? Because it was pointless!"
        },
        {
          "id": 7,
          "title": "The Tennis Ball",
          "content": "Why did the tennis ball go to court? Because it was served!"
        },
        {
          "id": 8,
          "title": "The Musical Note",
          "content": "Why was the musical note sad? It couldn't find its key!"
        },
        {
          "id": 9,
          "title": "The Insecure Computer",
          "content": "Why did the computer go to therapy? It had too many bytes of self-doubt!"
        },
        {
          "id": 10,
          "title": "The Ice Cream Truck",
          "content": "Why did the ice cream truck break down? It had too many sundae drivers!"
        },
        {
          "id": 11,
          "title": "The Tree's Secrets",
          "content": "Why was the tree invited to so many parties? Because it was a great root-er!"
        },
        {
          "id": 12,
          "title": "The Invisible Man",
          "content": "Why did the invisible man turn down the job offer? He couldn't see himself doing it!"
        },
        {
          "id": 13,
          "title": "The Salad Dressing",
          "content": "Why did the tomato turn red? Because it saw the salad dressing!"
        },
        {
          "id": 14,
          "title": "The Cautious Calculator",
          "content": "Why was the calculator hesitant to perform? It had too many problems!"
        },
        {
          "id": 15,
          "title": "The Balloon's Complaint",
          "content": "Why did the balloon go near the needle? It wanted to pop some sense into it!"
        },
        {
          "id": 16,
          "title": "The Caffeinated Owl",
          "content": "Why did the owl always get invited to parties? Because it was a hoot!"
        },
        {
          "id": 17,
          "title": "The Scared Corn",
          "content": "Why was the corn afraid? Because it heard it was going to be stalked!"
        },
        {
          "id": 18,
          "title": "The Hesitant Clock",
          "content": "Why did the clock hesitate? It had too many ticks and not enough tocks!"
        },
        {
          "id": 19,
          "title": "The Brave Tomato",
          "content": "Why was the tomato brave? Because it ketchup to the challenge!"
        },
        {
          "id": 20,
          "title": "The Slippery Soap",
          "content": "Why did the soap go to school? It wanted to be a little b-ar-soap!"
        },  {
            id: 21,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 22,
            title: "Did you hear about the mathematician who's afraid of negative numbers?",
            content: "He will stop at nothing to avoid them!"
        },
        {
            id: 23,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 24,
            title: "What do you call a fish wearing a crown?",
            content: "King mackerel!"
        },
        {
            id: 25,
            title: "Why don't skeletons fight each other?",
            content: "They don't have the guts!"
        },
      
      
    ];
    res.json(jokes);
});

server.listen(port,()=>{
    console.log('Server is running on port',port);
})