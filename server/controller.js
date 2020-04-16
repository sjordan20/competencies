
module.exports = {

    editUsername: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { username } = req.body

        db.edit_username([username, id])
            .then(() => {
                res.sendStatus(200)
            })
            .catch(() => {
                res.sendStatus(500)
            })
    },

    searchStudent: async (req, res) => {
        const db = req.app.get('db')
        const { last_name } = req.query
        const { id } = req.params

        // id is group_id
        let students = []
        if (id) {
            students = await db.search_student([`${last_name}`, id])
            res.status(200).send(students)
        } else {
            res.sendStatus(500)
        }
    }

}


