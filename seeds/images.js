
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      const images = [
        {
          title: "Slider 1",
          image_url: 'https://s3-us-west-2.amazonaws.com/whvapor-home-images/slide-01.jpg'
        },
        {
          title: "Slider 2",
          image_url: 'https://s3-us-west-2.amazonaws.com/whvapor-home-images/slide-02.jpg'
        },
        {
          title: "Slider 3",
          image_url: 'https://s3-us-west-2.amazonaws.com/whvapor-home-images/slide-03.jpg'
        },
        {
          title: "Advert 1",
          image_url: 'https://s3-us-west-2.amazonaws.com/whvapor-home-images/composition-1.jpg'
        },
        {
          title: "Advert 2",
          image_url: 'https://s3-us-west-2.amazonaws.com/whvapor-home-images/composition-2.jpg'
        },
        {
          title: "Product 1",
          image_url: 'https://s3-us-west-2.amazonaws.com/whvapor-home-images/composition-3.jpg'
        },
        {
          title: "Product 2",
          image_url: 'https://s3-us-west-2.amazonaws.com/whvapor-home-images/composition-4.png'
        }
      ];
      // Inserts seed entries
      return knex('images').insert(images);
    });
};
