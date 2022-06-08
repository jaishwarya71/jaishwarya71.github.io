var posts = {

    p3: {
      title: "The Presence of Architecture on Social Media",
      summary: "Perhaps the element that surprises us the most as we walk out of this home filled with statement contemporary pieces with a global aesthetic is the antique Tanjore painting in front of the main door.",
      date: "14 June 2022",
      url: "project-descriptions-for-architecture.html"
    },


    p2: {
      title: "Project Descriptions for Architecture",
      summary: "In Asian culture, filial piety is a beautiful custom. This project is such an example of it. The house was built by the children for their parents to enjoy old age and gardening.",
      date: "7 June 2022",
      url: "project-descriptions-for-architecture.html"
    },


    p1: {
      title: "Getting Projects Featured: A Detailed Guide",
      summary: "For Vietnamese, especially Hue people, ancestor worship has been very much appreciated. Therefore, we cleverly arranged the outdoor altar as well as the indoor altar to fit the relatively small space of the house. ",
      date: "1 June 2022",
      url: "project-descriptions-for-architecture.html"
    }


}

var keys = Object.keys(posts);
function randomKey() { return keys[ keys.length * Math.random() << 0] };
var nextKey = randomKey();
