import prisma from "../DB/db.config.js";
// get all casts
export const getAllCast = async (req, res) => {
  const casts = await prisma.cast.findMany({
    include: {
      movie: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  return res.json({ status: 200, casts });
};

// store casts

export const store = async (req, res) => {
  const { movie_id, name } = req.body;
  const cast = await prisma.cast.create({
    data: {
      movieId: movie_id,
      name: name,
    },
  });

  return res.json({ status: 200, cast, message: "Cast Added successfully!" });
};
