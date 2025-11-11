import React from 'react';

const Gallery = () => {
  const images = [
    'https://www.kidsmentalhealth.ca/wp-content/uploads/2025/06/social-skills-childhood-development-810x500.jpeg',
    'https://media.istockphoto.com/id/1152329427/photo/male-and-female-group-of-college-graduates-doing-community-service-street-and-roadside-cleanup.jpg?s=612x612&w=0&k=20&c=zobzGo4ch3Cue_ZGYKP40okap74WUSnHdH4TfbhPjSc=',
    'https://drop.ndtv.com/albums/NEWS/tree-plantation-in-india/tree-plantation-in-india-green-yatra.jpg',
    'https://english.news.cn/asiapacific/20220617/6120b4a5f1494541b2bf30c7a415114d/7cfe8b498db24c949e07a8d51c90b766.jpg',
    'https://thumbs.dreamstime.com/b/child-cutting-paper-class-development-social-lerning-school-kids-children-children-s-project-kindergarten-pictures-84256026.jpg',
    'https://worldscoutfoundation.org/sites/default/files/styles/content_extra_large/public/2022-04/Bdesh%20%208%20800%20x%20450%2031FF109B-C157-41CB-B6E4-A91D13C99604.jpg.webp',
  ];

  return (
    <div className="">
      <section className="py-16 w-11/12 mx-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
