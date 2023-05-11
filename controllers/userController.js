import User from '../models/User.js'



//  update user

export const updatedUser = async(req, res) => {

    const id = req.params.id

    try {

        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true})

        res.status(200).json({
            success: true, 
            message: 'Successfully updated', 
            data: updatedUser
        })

    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'Failed to update'
        })

    }
}

//  delete user

export const deleteUser = async(req, res) => {
    const id = req.params.id

    try {

        await User.findByIdAndDelete(id)

        res.status(200).json({
            success: true, 
            message: 'Successfully deleted', 
        })

    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'Failed to delete'
        })

    }
}

//  getSingle User

export const getSingleUser = async(req, res) => {

    const id = req.params.id

    try {
        const user = await User.findById(id)

        res.status(200).json({
            success: true, 
            message: 'Successfully', 
            data: user
        })
    } catch (error) {
        res.status(404).json({
            success: false, 
            message: 'Not 1 found', 
        })
    }
}

//  getAll User

export const getAllUser = async(req, res) => {

    try {
        const users = await User.find({})


        res.status(200).json({
            success: true, 
            count: users.length,
            message: 'Successfully', 
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success: false, 
            message: 'Not 2 found', 
        })
    }
}
