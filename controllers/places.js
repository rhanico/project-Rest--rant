const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})


//Get /places
router.get('/', (req,res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: './images/resto1.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: './images/resto2.jpg'
      }];
      
    res.render('places/index', { places })
})

module.exports = router
