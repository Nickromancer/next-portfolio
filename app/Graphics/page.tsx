"use client";
// eslint-disable-next-line
import Video from "@/public/Beach.mp4";
import Image from "next/image";
import Link from "next/link";
import { off } from "process";
import { useEffect, useState } from "react";
import { element } from "three/tsl";
export default function Graphics() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [click, setClicks] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  function handleClick() {
    setClicks(click + 1);
  }

  function getOffset(el: Element) {
    const rect = el.getBoundingClientRect();
    const number = rect.top + window.scrollY;
    return number;
  }

  useEffect(() => {
    const sections = document.querySelectorAll("#story > h3");
    const positions = [sections.length];
    sections.forEach((section) => {
      const position = getOffset(section);
      positions.push(position);
    });

    console.log(positions);

    const elements = document.querySelectorAll("a > button");
    var offset = 0;
    elements.forEach((element, i) => {
      element.classList.remove("selected");

      if (
        scrollPosition >= positions[i + 1] &&
        scrollPosition < positions[i + 2]
      ) {
        element.classList.add("selected");
      }
      if (scrollPosition >= positions[5]) {
        elements[4].classList.add("selected");
      }
    });

    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <video
          className=" mix-blend-exclusion fixed"
          autoPlay={true}
          loop
          muted
        >
          <source src={Video as string} />
        </video>
        <div className="backdrop-blur-[2px] backdrop-brightness-[40%] backdrop-hue-rotate-15 w-full h-full left-0 top-0 fixed"></div>
        <div
          className="fixed top-28 left-20 flex flex-col w-64 text-white z-30 gap-2"
          id="links"
        >
          <a href="#Motivation" onClick={handleClick}>
            <button>Motivation</button>
          </a>
          <a href="#Problem">
            <button>Problem Statement</button>
          </a>
          <a href="#Theoretical">
            <button>Theoretical Foundations</button>
          </a>
          <a href="#Settings">
            <button>Settings and User Controls</button>
          </a>
          <a href="#Future">
            <button>Future Work</button>
          </a>
        </div>
        <div
          className="text-white  flex flex-col *:self-start absolute top-28 left-0 w-full h-full px-[450px] gap-3 
                [&_h1]:text-7xl [&_h1]:font-bold [&_h2]:text-4xl [&_h2]:font-semibold [&_h3]:text-2xl [&_h3]:font-normal [&_p]:font-extralight [&_h4]:text-xl [&_h4]:font-lights
  [&_h3]:mt-[-60px] [&_h3]:pt-[60px]"
          id="story"
        >
          <h1>Advanced Real-Time Rendering in OpenGL</h1>
          <h2 id="Motivation">A Physically-Based Approach for Games</h2>
          <h3>Motivation</h3>
          <hr className="w-full" />
          <p>
            Modern game engines rely on physically accurate simulations of light
            and material interactions to achieve realism. This is especially
            important for AAA games, VR applications, and simulations where
            immersion depends heavily on how materials respond to changing
            lighting conditions.
            <br />
            <br />
            In this project, my goal was to implement a real-time physically
            based rendering (PBR) pipeline using OpenGL. Unlike traditional
            Phong or Blinn-Phong shading models, PBR is based on physical
            principles and energy conservation laws. It better simulates
            phenomena like roughness-dependent specular reflection, metallic
            surfaces, and environment-based lighting using real-world light
            probes.
            <br />
            <br />
            By building this system from scratch with OpenGL, GLSL, and C++, I
            seek to understand:
          </p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>How the graphics pipeline processes and shades geometry</li>
            <li>
              How physically based models can be applied in real-time scenarios,
              using self-made 3D models as focus point
            </li>
            <li>
              How shaders and framebuffer objects (FBOs) can be orchestrated to
              simulate global illumination and parallax effects
            </li>
          </ol>
          <h3 id="Problem">Problem Statement</h3>
          <hr className="w-full" />
          <p>
            The objective of this project is to develop a modular real-time
            rendering framework capable of rendering realistic materials using
            physically based shading models, enhanced by image-based lighting
            (IBL) and parallax occlusion mapping.
            <br />
            <br />
            More specifically:
          </p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>
              Simulate direct and indirect lighting using BRDFs and light probes
            </li>
            <li>
              Implement real-time reflection and refraction using environment
              cubemaps
            </li>
            <li>
              Simulate microgeometry and surface depth using normal and height
              maps
            </li>
            <li>
              Render the scene using modern OpenGL (core profile), using
              shaders, VAOs, VBOs, and framebuffer attachments
            </li>
          </ol>
          <p>
            This involves implementing the entire IBL pipeline in OpenGL,
            generating irradiance maps, prefiltered environment maps, and BRDF
            lookup textures, all of which are then used in a fragment shader to
            shade PBR 3D models.
          </p>
          <h3 id="Theoretical">Theoretical Foundations</h3>
          <hr className="w-full" />
          <h4>1. Physically Based Rendering (PBR)</h4>
          <p>
            This involves implementing the entire IBL pipeline in OpenGL,
            generating irradiance maps, prefiltered environment maps, and BRDF
            lookup textures, all of which are then used in a fragment shader to
            shade PBR 3D models.
          </p>
          <h5>1.1 Bidirectional Reflectance Distribution Function (BRDF)</h5>
          <p>
            The BRDF equation defines how light is reflected at an opaque
            surface:
          </p>
          <Image
            className="my-4"
            src="/Graphics_1.png"
            alt=""
            width={2000}
            height={0}
          />
          <p>Where:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>D(h): Normal Distribution Function (GGX)</li>
            <li>F(h,v): Fresnel term (Schlick’s approximation)</li>
            <li>G(l,v): Geometry function (Smith’s method)</li>
          </ol>
          <p>In the shader (pbr.frag), these are implemented as:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>DistributionGGX for 𝐷(ℎ)</li>
            <li>GeometrySmith using Schlick-GGX</li>
            <li>FresnelSchlick for F</li>
          </ol>
          <p>
            These functions are embedded in GLSL fragment shaders. Per-pixel
            normals are fetched from a normal map and transformed into world
            space. Tangent-to-world matrices are calculated on the GPU to
            perform this transformation.
          </p>
          <h4>2. Image-Based Lighting (IBL)</h4>
          <p>
            Traditional real-time lighting uses point or directional lights. IBL
            simulates indirect lighting from the environment, capturing complex
            light contributions from all directions.
          </p>
          <h5>2.1 Environment Map</h5>
          <p>
            In OpenGL, an HDR.ℎ𝑑r image is first loaded into a 2D texture
            (equirectangular projection). An offscreen rendering pass
            (equirectangular_to_cubemap.frag) is used to convert this into a
            cubemap texture using framebuffer rendering to six views.
          </p>
          <h5>2.2 Diffuse Irradiance Map</h5>
          <p>Used to approximate diffuse lighting:</p>
          <Image
            className="my-4"
            src="/Graphics_2.png"
            alt=""
            width={2000}
            height={0}
          />
          <p>
            This is computed in irradiance_convolution.frag, where the cubemap
            is sampled using a cosineweighted distribution. The result is a
            blurred cubemap representing low-frequency lighting.
          </p>
          <h5>2.3 Prefiltered Specular Map</h5>
          <p>
            Specular reflections depend on surface roughness. Instead of
            computing convolution per frame, we prefilter the cubemap for
            several roughness values and store them in mipmap levels.
          </p>
          <Image
            className="my-4"
            src="/Graphics_3.png"
            alt=""
            width={2000}
            height={0}
          />
          <p>
            In prefilter.frag, we sample the environment with importance
            sampling (based on GGX) and store results into a cubemap with
            multiple mipmap levels.
          </p>
          <h5>2.4 BRDF Integration Lookup Texture</h5>
          <p>
            Computing the full specular IBL integration every frame is
            expensive. Instead, a 2D BRDF LUT is generated and stored as a
            texture using brdf.frag.
            <br />
            <br />
            This LUT contains precomputed integrals of the Fresnel and geometry
            terms as a function of:
          </p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>NdotV (view angle)</li>
            <li>roughness</li>
          </ol>
          <p>In the PBR shader, this is used as:</p>
          <Image
            className="my-4"
            src="/Graphics_4.png"
            alt=""
            width={2000}
            height={0}
          />
          <h4>3. Parallax Occlusion Mapping</h4>
          <p>
            Problem: Textures are flat, but we want to simulate 3D depth with
            displacement effects.
          </p>
          <p>
            Solution: Use a height map to offset the texture coordinates based
            on the view direction4
          </p>
          <p>Steps in parallax_mapping.frag:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>
              Convert view direction to tangent space using the TBN matrix
            </li>
            <li>
              Step through the depth texture (height map) along the view vector
            </li>
            <li>Perform ray-height intersection via linear search</li>
            <li>Offset the texture coordinate to simulate depth</li>
          </ol>
          <p>OpenGL-specific considerations:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>Requires a normal map and height map bound to texture units</li>
            <li>
              TBN matrix can be passed per-vertex or calculated per-fragment
            </li>
            <li>
              Height scale is passed as a uniform to control the effect
              intensity
            </li>
          </ol>
          <p>
            This method simulates complex surfaces like bricks, cobblestones,
            and carved wood without any extra geometry.
          </p>
          <h4>4. Skybox Rendering</h4>
          <p>
            The background of the scene is rendered using a cube textured with
            the environment map.
          </p>
          <p>Steps:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>Disable depth writing: glDepthMask(GL_FALSE)</li>
            <li>
              Use a shader (background.frag) that transforms view direction into
              texture coordinates
            </li>
            <li>
              Always render skybox cube around the camera origin to ensure
              infinite appearance
            </li>
            <p>
              This ensures the environment lighting, and the visible background
              are always consistent.
            </p>
          </ol>
          <h4>5. Framebuffer Workflow (Render Pipeline)</h4>
          <p>Rendering passes:</p>
          <ol className="list-decimal [&_li]:font-extralight ml-5 *:my-1">
            <li>
              Equirectangular → Cubemap
              <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
                <li>Input: HDR 2D texture</li>
                <li>Output: Environment cubemap</li>
              </ol>
            </li>
            <li>
              Cubemap → Irradiance Map
              <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
                <li>Input: Environment cubemap</li>
                <li>Output: Diffuse lighting map</li>
              </ol>
              <li>Cubemap → Prefiltered Map</li>
              <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
                <li>
                  Output: Mipmap chain of cubemaps for different roughness
                  levels
                </li>
              </ol>
              <li>BRDF LUT</li>
              <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
                <li>Input: None</li>
                <li>Output: 2D lookup texture (stored in RG format)</li>
              </ol>
            </li>
          </ol>
          <p>
            These passes are done off-screen using framebuffer objects (FBOs),
            where each result is written to a texture for later use in the final
            PBR shader.
          </p>
          <h3 id="Settings">Settings and User Controls</h3>
          <hr className="w-full" />
          <p>
            The project includes a real-time graphical user interface (GUI) that
            allows the user to interactively modify rendering parameters. This
            enables real-time experimentation with lighting, material response,
            and viewing conditions, essential for tuning physically based
            rendering. The interface is built using IMGui.
          </p>
          <p>Parallax Mapping:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>Controls the depth effect of Parallax Occlusion Mapping</li>
            <li>
              Affects how strongly the height map displaces texture coordinates
            </li>
            <li>
              Lower values produce subtle depth; higher values exaggerate the 3D
              illusion
            </li>
          </ol>
          <p>Material Selection:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>
              Let the user choose between different preset materials for the
              plane containing parallaxing (e.g., concrete, sand)
            </li>
          </ol>
          <p>Gamma Correction:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>Adjusts gamma correction applied to the final image</li>
            <li>
              Common values for reference: 1.0 (no correction), 2.2 (sRGB
              standard)
            </li>
            <li>
              Important for perceptually accurate brightness and color rendering
            </li>
          </ol>
          <p>Light Settings:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>Defines the color of the main point light</li>
            <li>Fully white light in this case (no tinting)</li>
          </ol>
          <p>Light Position:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>
              Controls the position of the scene&apos;s main light source in 3D
              space
            </li>
            <li>
              Affects direction of shadows, specular highlights, and shading
              orientation
            </li>
          </ol>
          <p>Object (Chest) Position:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>Controls the world position of the 3D model</li>
            <li>Useful for testing lighting interaction with models</li>
          </ol>
          <p>Environment Map Selection:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>
              Let the user see the different maps used to compute the
              image-based lighting (IBL)
            </li>
          </ol>
          <h3 id="Future">Future Work</h3>
          <hr className="w-full" />
          <p>With more time, I would:</p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1 pb-28">
            <li>
              Add shadow maps for directional lights and more realistic shadows
            </li>
            <li>Implement post-processing pipeline with different effects</li>
            <li>
              Try out some particle effects to pair with the PBR materials
            </li>
            <li>
              Try to benchmark the current scene with many models using PBR
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
