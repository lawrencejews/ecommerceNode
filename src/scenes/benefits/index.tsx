import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";


// Mapping the section of benefits
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of Art Facilities",
    description: " Build your dreams start with your body for a successful life"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Hundreds of Diverse Classes",
    description: " Build your dreams start with your body for a successful life"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: " Build your dreams start with your body for a successful life"
  }
];

// Animation styles
// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >

        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. we provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }}
        // variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet risus eu arcu lacinia,
                ac tempor enim porttitor. Fusce pellentesque suscipit est, ut consectetur mauris venenatis vel.
                Phasellus sed odio non purus facilisis aliquet. Etiam finibus malesuada ullamcorper.
                Aenean laoreet elit vestibulum arcu egestas, sit amet pharetra nisl dictum.</p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec sollicitudin nunc at feugiat consectetur.
                Aliquam vel leo a urna rhoncus scelerisque ac nec velit.
                Nunc vitae convallis nisl, et mollis lectus. Ut fermentum sit amet turpis aliquam accumsan.
                Integer maximus eu tortor at faucibus
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before: right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Benefits;