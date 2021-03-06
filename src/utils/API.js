import axios from "axios";

export default {
  getYoutubeVideos: function (topic = null) {
    // return 5 youtube videos with title, link, description, image
    // if no topic provided, will default to "full stack development"

    // USAGE:
    // API.getYoutubeVideos().then(res => setVideos([...res.data]))
    // API.getYoutubeVideos("topic").then(res => setVideos([...res.data]))
    return axios.get("/api/youtube/getvideos", { params: { topic: topic } });
  },

  getGoogleBooks: function (topic = null) {
    // return 5 google books with title, link, description, image
    // if no topic provided, will default to "full stack development"

    // USAGE:
    // API.getGoogleBooks().then(res => setBooks([...res.data]))
    // API.getGoogleBooks("topic").then(res => setBooks([...res.data]))
    return axios.get("/api/googlebooks/getbooks", { params: { topic: topic } });
  },

  getGoogleNews: function (topic = null) {
    // return 5 google news articles with title, link, description, image
    // if no topic provided, will default to "web development"

    // USAGE:
    // API.getGoogleNews().then(res => setNews([...res.data]))
    // API.getGoogleNews("topic").then(res => setNews([...res.data]))
    return axios.get("/api/googlenews/getnews", { params: { topic: topic } });
  },

  getUdemyCourses: function (topic = null) {
    // return 5 udemy courses with title, link, description, image and price
    // if no topic provided, will default to "full stack development"

    // USAGE:
    // API.getUdemyCourses().then(res => setCourses([...res.data]))
    // API.getUdemyCourses("topic").then(res => setCourses([...res.data]))
    return axios.get("/api/udemy/getcourses", { params: { topic: topic } });
  },

  searchStackOverFlow: function (question) {
    // return stack over flow answers with title, link, description, and image
    // must pass a question else it will fail

    // USAGE:
    // API.searchStackoverFlow("topic").then(res => setQuestion([...res.data]))
    if (question)
      return axios.get("/api/stackoverflow/ask", {
        params: { question: question },
      });
    else
      throw Error("Question must be provided to submit to Stack Overflow API");
  },

  saveToUser: function (user, type, data) {
    // when a user want to save a book/video/course/ref/question to their provide, take in user,
    // type of item and data (which usually include title, desc, link, image)

    // USAGE:
    // API.saveToUser(user, type, data).then(res => console.log(res)))
    // Where user == user login email, type == ['book', 'video', 'course', 'reference', 'question'], data == type info
    // ex.. data = { title: title, description: description, image: image, link: link }
    if (
      user &&
      type &&
      ["books", "videos", "courses", "references", "questions"].includes(
        type
      ) &&
      data
    ) {
      const dataToSave = {
        user: user,
        type: type,
        data: data,
      };
      return axios.post("/api/user/saveorgetitem", dataToSave);
    } else
      throw Error(
        "User, type or data is not valid. Data contains: " + user,
        type,
        data
      );
  },

  removeFromUser: function (user, type, title) {
    // when a user want to remove a book/video/course/ref/question to their provide, take in user,
    // type of item and title

    // USAGE:
    // API.removeFromUser(user, type, title).then(res => console.log(res)))
    // Where user == user login email, type == ['book', 'video', 'course', 'reference', 'question'], title = title
    if (
      user &&
      type &&
      ["books", "videos", "courses", "references", "questions"].includes(
        type
      ) &&
      title
    ) {
      const dataToRemove = {
        user: user,
        type: type,
        title: title,
      };
      return axios.post("/api/user/removeitem", dataToRemove);
    } else
      throw Error(
        "User, type or title is not valid. Data contains: " + user,
        type,
        title
      );
  },

  queryUserData: function (user, type) {
    // when a user want to query a book/video/course/ref/question saved to their profile, take in user
    // and type of item and return array of objects containing items.

    // USAGE:
    // API.queryUserData(user, type).then(res => setUserData([...res.data]))
    // Where user == user login email, type == ['book', 'video', 'course', 'reference', 'question']
    if (
      user &&
      type &&
      ["books", "videos", "courses", "references", "questions"].includes(type)
    ) {
      const dataToQuery = {
        user: user,
        type: type,
      };
      return axios.get("/api/user/saveorgetitem", { params: dataToQuery });
    } else
      throw Error("User or type is not valid.  Data contians: " + user + type);
  },

  queryAllUserData: function (user) {
    // query all data by user name

    // USAGE:
    // API.queryAllUserData(user).then(res => setAllUserData([...res.data]))
    // where user == user login email
    if (user) {
      return axios.get("/api/user/getallitems", { params: { user: user } });
    } else throw Error("User is not valid. Data contians: " + user);
  },
};
