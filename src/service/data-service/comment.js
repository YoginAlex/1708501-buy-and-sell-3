'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../constants`);

class CommentsService {
  create(offer, comment) {
    const newComment = Object.assign({
      id: nanoid(MAX_ID_LENGTH),
    }, comment);

    offer.comments.push(newComment);
    return newComment;
  }

  drop(offer, commentId) {
    if (!offer) {
      return null;
    }
    const comment = offer.comments.find((item) => item.id === commentId);
    offer.comments = offer.comments.filter((item) => item.id !== commentId);
    return comment;
  }

  findAll(offer) {
    return offer.comments || [];
  }
}

module.exports = CommentsService;
