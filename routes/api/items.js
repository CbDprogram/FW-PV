const express = require('express');
const router = express.Router ();

//Model
const Item = require('../../models/Item');





// @route GET api/items
// @desc GETTING ALL ITEMS
// @access Public

router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1})
    .then(items => res.json(items))
});


// @route POST to Api/items
// @desc Creating the Item
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        category: req.body.category,
        area: req.body.area,
        description: req.body.description
    


    });

    newItem.save().then(item => res.json(item));
});

// @route Delete to Api/items/:id
// @desc Delete the Item
// @access Public

router.delete('/:id', (req, res) => {
 Item.findById(req.params.id)
    .then(item =>item.remove().then(() =>res.json({success: true})))
    .catch(err => res.status(404) .json({success: false}));
});





module.exports = router;

