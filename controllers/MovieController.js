import prisma from "../DB/db.config.js";

// storing movies
export const store = async (req, res) => {
  const { name } = req.body;

  const movie = await prisma.movie.create({
    data: {
      name: name,
    },
  });

  return res.json({ status: 200, message: "successfully added movie", movie });
};

// fetching all movies
export const getAll = async (req, res) => {
  const movies = await prisma.movie.findMany();

  return res.json({ status: 200, message: "successfully", movies });
};

//update
export const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await prisma.movie.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });

  return res.json({ status: 200, message: "successfully updated" });
};

//delete
export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  await prisma.movie.delete({
    where: {
      id: id,
    },
  });

  return res.json({ status: 200, message: "successfully deleted" });
};

//searching
export const search = async (req, res) => {
  const query = req.query.q;

  const movie = await prisma.movie.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return res.json({ status: 200, message: "successfully", movie });
};
