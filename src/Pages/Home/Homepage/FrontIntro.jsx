import { Card } from "antd";
import { students1 } from "../../../../public/assets/index";

const FrontIntro = () => {
  return (
    <div className="p-8 bg-gray-100 mt-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-400">
            A MILITARY SCHOOL FOR <span className="text-yellow-600">BOYS</span>
          </h2>
          <p className="mt-4 text-gray-700 text-xl">
            Army and Navy Academy offers exceptional teachers, rigorous
            athletics, and a nationally recognized leadership program. At a time
            when many boys are struggling in the classroom, the Academy employs
            evidence-based single-gender education techniques proven to help
            boys thrive when learning. Graduates of the Academy follow life
            paths informed by intellectual curiosity, earned confidence, and
            high standards of character. The Academy isn’t just a military
            school for boys: it’s a transformative step for any young man
            seeking greatness.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative">
          <img
            src={students1}
            alt="Military Academy"
            className="rounded-lg shadow-lg w-150 h-80"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-blue-500 border-2 shadow-md p-6">
          <h3 className="text-3xl font-extrabold text-blue-600 ">
            EDUCATING YOUNG MEN
          </h3>
          <p className="mt-2 text-gray-700 text-xl">
            Boys in middle school and high school have educational needs that
            are not being met in most public and private school settings. The
            current generation of boys is falling behind in school, resulting in
            a crisis in higher education. We use relational teaching and highly
            structured classes to educate boys how they learn best.
          </p>
        </Card>
        <Card className="bg-blue-700 text-white shadow-md p-6">
          <h3 className="text-3xl font-extrabold text-blue-600">
            INSTILLING VIRTUE
          </h3>
          <p className="mt-2 text-xl">
            We aim to shape our students into ethical, responsible, well-rounded
            members of society. Virtues-based education helps young men to
            develop resilience in the face of life’s many challenges. Character
            development programs are proven to accelerate academic success while
            laying the foundation for a meaningful, fulfilling life.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default FrontIntro;
