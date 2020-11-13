const router = require("express").Router();
const Workout = require("../models/workout-model.js");

router.put("/api/workouts/:id", ({ params }, res) => {
    const newWorkout = res.req.body;
    Workout.findByIdAndUpdate(
        {
            _id: mongoose.Types.ObjectId(params.id)
        },
        {
            $push: {
                exercises:
                    [{
                        type: newWorkout.type,
                        name: newWorkout.name,
                        totalDuration: newWorkout.totalDuration,
                        weight: newWorkout.weight,
                        reps: newWorkout.reps,
                        sets: newWorkout.sets,
                        distance: newWorkout.distance
                    }]
            }

        })
        .then(dbWorkout => {
            console.log(dbWorkout, "Working out");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/", ({ body }, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({
        type: body.type,
        name: body.name,
        totalDuration: body.totalDuration,
        weight: body.weight,
        reps: body.reps,
        sets: body.sets,
        distance: body.distance
    })
        .then(dbWorkout => {
            console.log(dbWorkout);
            console.log(res);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
router.get("/api/workouts/range", ({ body }, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
})