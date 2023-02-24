import {
  FC,
  Ref,
  createRef,
  useEffect,
  MutableRefObject,
  MouseEventHandler,
} from "react";
import useIntersection from "../../hooks/useIntersection";
import { Parallax } from "react-parallax";
import koSamuiBg from "../../Static/img/kosamui2.jpg";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import "./Projects.css";

interface ProjectsProps {
  projectsData: {
    id: number;
    title: string;
    headline: string;
    caption: string;
    image: string;
    description: string;
    sourceCode: string;
    liveDemo: string;
  }[];
  featuredProjectRefs: MutableRefObject<MutableRefObject<HTMLDivElement>[]>;
  projectsOnLoad: number;
  handleLoadMore: MouseEventHandler<HTMLButtonElement>;
}

const Projects: FC<ProjectsProps> = ({
  projectsData,
  featuredProjectRefs,
  projectsOnLoad,
  handleLoadMore,
}) => {
  featuredProjectRefs.current = projectsData.map(
    (proj) =>
      featuredProjectRefs.current[proj.id] ?? createRef<Ref<HTMLDivElement>>()
  );

  const inViewport0 = useIntersection(featuredProjectRefs.current[0], "-150px");
  const inViewport1 = useIntersection(featuredProjectRefs.current[1], "-150px");
  const inViewport2 = useIntersection(featuredProjectRefs.current[2], "-150px");
  const inViewport3 = useIntersection(featuredProjectRefs.current[3], "-150px");
  const inViewport4 = useIntersection(featuredProjectRefs.current[4], "-150px");
  const inViewport5 = useIntersection(featuredProjectRefs.current[5], "-150px");
  const inViewport6 = useIntersection(featuredProjectRefs.current[6], "-150px");
  const inViewport7 = useIntersection(featuredProjectRefs.current[7], "-150px");
  const inViewport8 = useIntersection(featuredProjectRefs.current[8], "-150px");
  const inViewport9 = useIntersection(featuredProjectRefs.current[9], "-150px");
  const inViewport10 = useIntersection(
    featuredProjectRefs.current[10],
    "-150px"
  );

  useEffect(() => {
    console.log(featuredProjectRefs.current);
  }, [featuredProjectRefs.current]);

  if (inViewport0) {
    let el = document.getElementById("id-0");
    if (el && el.className === "project-container isNotVisibleLeft") {
      el.className = "project-container isVisibleLeft";
    }
  }
  if (inViewport1) {
    let el = document.getElementById("id-1");
    if (el && el.className === "project-container isNotVisibleRight") {
      el.className = "project-container isVisibleRight";
    }
  }
  if (inViewport2) {
    let el = document.getElementById("id-2");
    if (el && el.className === "project-container isNotVisibleLeft") {
      el.className = "project-container isVisibleLeft";
    }
  }
  if (inViewport3) {
    let el = document.getElementById("id-3");
    if (el && el.className === "project-container isNotVisibleRight") {
      el.className = "project-container isVisibleRight";
    }
  }
  if (inViewport4) {
    let el = document.getElementById("id-4");
    if (el && el.className === "project-container isNotVisibleLeft") {
      el.className = "project-container isVisibleLeft";
    }
  }
  if (inViewport5) {
    let el = document.getElementById("id-5");
    if (el && el.className === "project-container isNotVisibleRight") {
      el.className = "project-container isVisibleRight";
    }
  }
  if (inViewport6) {
    let el = document.getElementById("id-6");
    if (el && el.className === "project-container isNotVisibleLeft") {
      el.className = "project-container isVisibleLeft";
    }
  }
  if (inViewport7) {
    let el = document.getElementById("id-7");
    if (el && el.className === "project-container isNotVisibleRight") {
      el.className = "project-container isVisibleRight";
    }
  }
  if (inViewport8) {
    let el = document.getElementById("id-8");
    if (el && el.className === "project-container isNotVisibleLeft") {
      el.className = "project-container isVisibleLeft";
    }
  }
  if (inViewport9) {
    let el = document.getElementById("id-9");
    if (el && el.className === "project-container isNotVisibleRight") {
      el.className = "project-container isVisibleRight";
    }
  }
  if (inViewport10) {
    let el = document.getElementById("id-10");
    if (el && el.className === "project-container isNotVisibleLeft") {
      el.className = "project-container isVisibleLeft";
    }
  }

  return (
    <div className="projects-container">
      <Parallax
        blur={0}
        bgImage={koSamuiBg}
        bgImageAlt="nyc-mill-one"
        strength={500}
      >
        <div className="projects-header-box">
          <h1 className="projects-header">Latest Works</h1>
        </div>
      </Parallax>
      <div className="projects-content-box">
        {projectsData
          .slice()
          .reverse()
          .map((projectsData) => (
            <FeaturedProject
              key={`key-${projectsData.id}`}
              ref={featuredProjectRefs.current[projectsData.id]}
              pdId={projectsData.id}
              image={projectsData.image}
              title={projectsData.title}
              headline={projectsData.headline}
              caption={projectsData.caption}
              description={projectsData.description}
              sourceCode={projectsData.sourceCode}
              liveDemo={projectsData.liveDemo}
            />
          ))
          .slice(0, projectsOnLoad)}
        {projectsOnLoad < 11 ? (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load more
          </button>
        ) : (
          <p className="load-more-p">More projects are in the works!</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
