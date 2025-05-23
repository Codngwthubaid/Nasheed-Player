import { Album } from "../models/album.model.js"
export const getAllAlbums = async (req, res, next) => {
    try {
        const albums = await Album.find()
        res.status(200).json(albums)
    } catch (error) {
        console.log("Error present in get all albums route", error.message)
        next(error)
    }
}

export const getAlbumById = async (req, res, next) => {
    try {
        const { albumId } = req.params
        const album = await Album.findById(albumId).populate("songs")
        if (!album) return res.status(404).json({ success: false, message: "Album not found" });
        else res.status(200).json(album)

    } catch (error) {
        console.log("Error present in get album by id route", error.message)
        next(error)
    }
}