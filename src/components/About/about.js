import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Me</h1>
        <div className="text-gray-700 space-y-4">
          <section>
            <h2 className="text-2xl font-semibold text-blue-500">Who Am I?</h2>
            <p className="mt-2 text-lg">

            Haii...
Perkenalkan nama saya rivaldo rizky habibie, saya biasa dipanggi aldo tapi saya lebih suka dipanggil rivaldo, saya lahir pada 4 september 2006 di Malang, saya besar juga di malang, dan untuk sekarang saya bersekolah di SMK Telkom Malang yang tepatnya saya masih kelas X di jurusan RPL ruang 6 , saya anak pertama dari dua bersaudara,            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-500">Skills</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>React.js & Redux</li>
              <li>Node.js & Express</li>
              <li>JavaScript & TypeScript</li>
              <li>Tailwind CSS & Bootstrap</li>
              <li>Git & GitHub</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-500">Hobbies</h2>
            <p className="mt-2 text-lg">
              Outside of programming, I love reading books, hiking in nature, and exploring new places. I also enjoy
              playing video games and learning new things through online courses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-500">Let's Connect</h2>
            <p className="mt-2 text-lg">
              I’m always open to new opportunities and collaborations. Feel free to reach out to me through my social
              media or email!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};