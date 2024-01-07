const UserWord = require('../model/userWord.model.js')

class LearnServer {
    async upUserWordDate(userId, wordId, word) {
        const res = await UserWord.findOrCreate({
            where: { wordId, userId }, // 根据 wordId 和 userId 进行查找或创建
            defaults: { mastered: true, word } // 默认设置 mastered 字段为 true，表示用户掌握了该单词
        });
        return res

    }
    async upUserWordDateFalse(userId, wordId) {
        const res = await UserWord.update(
            { mastered: false },
            { where: { wordId, userId } }, // 根据 wordId 和 userId 进行查找或创建
            // 默认设置 mastered 字段为 false，表示用户未掌握该单词
        );
        return res
    }
}

module.exports = new LearnServer()