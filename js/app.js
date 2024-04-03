let tweets = [
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "John",
        created_at: "04-02-2023",
        age: 12
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Frank",
        created_at: "02-20-2023",
        age: 14
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Donald",
        created_at: "01-19-2023",
        age: 22
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Joe",
        created_at: "03-27-2023",
        age: 32
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Emily",
        created_at: "02-14-2023",
        age: 14
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Patrick",
        created_at: "04-01-2023",
        age: 23
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Bob",
        created_at: "03-12-2023",
        age: 18
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Trevor",
        created_at: "02-28-2023",
        age: 17
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Mike",
        created_at: "01-21-2023",
        age: 13
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Jane",
        created_at: "03-05-2023",
        age: 15
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Peter",
        created_at: "02-22-2023",
        age: 11
    },
    {
        tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio deserunt! Officia veritatis quam sapiente.",
        username: "Dude",
        created_at: "04-01-2023",
        age: 19
    },
];

let counter = 0;
while(counter < tweets.length){
    if(tweets[counter].age >= 18){
        console.log(tweets[counter].tweet);
        console.log(tweets[counter].username);
        console.log(tweets[counter].created_at);
    }
    counter++;
}

for(let i = 0; i < tweets.length; i++){
    if(tweets[i].age < 18){
        console.log(tweets[i].tweet);
        console.log(tweets[i].username);
        console.log(tweets[i].created_at);
    }
}