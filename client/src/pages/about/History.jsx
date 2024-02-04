/* eslint-disable react/no-unescaped-entities */
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/1.jpg";

const History = () => {
  return (
    <div className="p-2 dark:bg-royalBlue">
      <div className="mb-5">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img
              alt="daisy"
              src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
            />
          </div>
          <div className="diff-item-2">
            <img
              alt="daisy"
              src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      <div>
        <h2 className="text-pretty text-3xl text-center">History</h2>
        <hr className="mt-5 border-2" />
        <div className="mt-5 mb-5">
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">About Us</Breadcrumb.Item>
            <Breadcrumb.Item>History</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="font-light">
        <h2 className="text-sl mb-5 text-blue-600 font-semibold uppercase dark:text-white">
          Welcome to School-Cool, Kolkata
        </h2>
        <p className="text-justify text-sm">
          Kolkata on 1 April 1947 was, well, a quite different city. The country
          was then under British Rule. India was practically reborn and so were
          its cities. Kolkata, still, had much more green and open expanses of
          land. Its southern parts were sparsely populated and this cozy
          community was waiting for an educational institution where learning
          and growing up would happen in a happy and innovative environment. A
          new nest that would teach their little ones to fly on confident wings.
          <br />
          <br />
          South Point School, an English-medium and co-educational school,
          opening its gates at 16 Mandeville Gardens on 1 April 1947, was an
          answer to the community’s prayers.
          <br />
          <br />
          It captured the popular imagination since the moment of its
          foundation. Shri Satikanta Guha and Smt. Pritylata Guha, Founder and
          Associate Founder of the School, nurtured earliest Pointers – just
          twenty in number — with an inspired mix of love, care and utmost
          responsibility. To help the Founders fulfil their vision and mission
          was a handful of dedicated teachers. And, the initial faculty was an
          enviable collection of stalwarts from the cultural, literary and
          artistic milieu of Bengal. Their genius improved manifold the ambience
          of creative purposefulness so that every child who crossed the gates
          of the early, quaint bungalow knew his or her potential would never be
          left unfulfilled.
          <br />
          <br />
          The School which had welcomed twenty children in a distant summer has
          spread its rainbow wings in much the same way as its students have.
          The journey, taken since 1954, has been a magical one, marked by
          splendid milestones. The comely bungalow soon grew into newer, bigger
          buildings so that it could bring more and more children into its fold.
          The early faculty handed the batons over to a burgeoning number of
          teachers who were equally committed and fully trained to keep up with
          the changing times. School-Cool was the first co-educational School in
          the city to be affiliated to the West Bengal Board of Secondary
          Education. The first School Final batch was sent up in 1958.
          <br />
          <br />
          April seems to be the happiest month in the evolution of School-Cool.
          On another 1 April – this time in 1960 – it was upgraded to the Higher
          Secondary level. The High School found a new, and the present,
          premises on 8 April 1970 at 82/7A Ballygunge Place. The School is now
          run by the School-Cool Education Society.
          <br />
          <br />
          The growing family of School-Cool has the rare distinction of winning
          a place in the Guinness Book of Records (1984-1992) as the world’s
          largest School.
          <br />
          <br />
          A persistent commitment to excellence, success, hard work, compassion,
          a collaborative atmosphere and brave technological strides is a tough
          job but the large School-Cool family – now consisting of nearly 12,000
          students, 475 teachers and 259 non-teaching staff-members – carries it
          on tirelessly every day. The huge team of students and staff is not a
          deterrent; it just means more minds, more hands and more hearts to
          plant and rear saplings of excellence in every classroom of
          School-Cool.
          <br />
          <br />
          Education at School-Cool is a delightful pool of academics,
          assessments, co-curricular activities, fests, sports, celebrations,
          excursions and a seamless interaction among the faculty, the pupils
          and the guardians. The goal is actually to inspire Pointers to strive
          beyond goals; a look at the School-Cool alumni proves the point.
          Former Pointers straddle the spheres of scholarship and films; of
          music and public administration; of science and medicine; of
          literature, journalism, corporate houses and sports with exceptional
          ease.
          <br />
          <br />
          The campus that greets little Pointers and grooms them for the team
          sport called life is School-Cool. It has Nursery, Transition and
          Classes from I to V. Students then graduate to School-Cool High School
          to join Class VI. From Classes VI to X they study under the Central
          Board of Secondary Education. A majority of Pointers return to their
          dear alma mater for the Plus-Two years, Classes XI and XII, under the
          Central Board of Secondary Education. It may be mentioned here that
          School-Cool had earlier been affiliated to both the West Bengal Board
          of Secondary Education and the West Bengal Council of Higher Secondary
          Education. Now, its pupils appear for their Board examinations under
          CBSE only.
          <br />
          <br />
          Every day begins in School-Cool with bolder strides towards excellence
          — in carefree Nursery playrooms, in Smart Class rooms, in the most
          rewarding Mindspark programme, in assemblies where each and every
          important occasion is celebrated with gusto, across classrooms,
          laboratories and libraries, in CCA sessions, in sports practices, in
          Saturday Activity Classes, in the friendlier yet sharper evaluation
          methods, and in all the candid interactive and orientation sessions
          meant for parents. The result is clearly seen in Pointers fetching top
          honours in Board examinations, inter-school competitions and in all
          areas where they can discover and project their talent and skills. The
          School perennially encourages them with awards and scholarships,
          workshops and enrichment programmes.
          <br />
          <br />
          And, now, its campuses are an even happier and more secure zone as the
          SChool-Cool Education Society has received the OHSAS 18001:2007
          Occupational Health and Safety Management Certification from the
          British Standards Institution (BSI).
          <br />
          <br />A splendid milestone in post-Independent Kolkata – that’s what
          School-Cool has been. And will be, taking on new challenges and
          fulfilling newer expectations.
        </p>
      </div>
      <div className="border-2 w-full h-auto mt-5">
        <div className="flex flex-col items-center p-2 mb-5 font-light">
          <img src={logo} className="w-20 h-20 rounded-full mt-5" />
          <h2 className="uppercase mt-5 mb-5 text-xl">
            The School-Cool Charitable Trust
          </h2>
          <p className="text-center text-sm">
            This is a profit organization dedicated to supporting educational
            initiatives and programs that benefit students and schools. The
            trust may provide funding for school supplies, scholarships,
            extracurricular activities, teacher training, and other educational
            resources. Its goal is to enhance the quality of education and
            create a positive impact on student's learning experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
