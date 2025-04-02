import React from "react";
import Image from "next/image";
import PostFooter from "./PostFooter";
interface PostProps {
    content: {
        p1: string;
    h2_1: string;
    p2: string;
    h2_2: string;
    p3: string;
    h2_3: string;
    p4: string;
    h2_4: string;
    p5: string,
    img: {
        src: string,
        alt: string
    }
    }
    
}
const PostTemplate: React.FC<PostProps> = ({ content  }) => {
    const { p1, h2_1, p2, h2_2, p3, h2_3, p4, h2_4, img, p5  } = content;
    return (
        <div className="flex flex-col">
            <p
                className="text-[16px] text-black/75 font-normal text-start"
                dangerouslySetInnerHTML={{ __html: p1 }}
            />
            <h2
                className="text-2xl font-bold pt-3"
                dangerouslySetInnerHTML={{ __html: h2_1 }}
            />
            <p
                className="text-[16px] text-black/75 font-normal text-start pt-3"
                dangerouslySetInnerHTML={{ __html: p2 }}
            />
            <h2
                className="text-2xl font-bold pt-3"
                dangerouslySetInnerHTML={{ __html: h2_2 }}
            />
            <p className="text-[16px] text-black/75 font-normal text-start pt-3" dangerouslySetInnerHTML={{__html: p3}}/>
            <h2 className="text-2xl font-bold pt-3" dangerouslySetInnerHTML={{__html: h2_3}}/>
            <p className="text-[16px] text-black/75 font-normal text-start" dangerouslySetInnerHTML={{__html: p4}}/>
            <h2 className="text-2xl font-bold pt-3 pb-3" dangerouslySetInnerHTML={{__html: h2_4}}/>
            <Image
                src={img.src}
                width={1200}
                height={600}
                alt={img.alt}
            />
            <p className="text-[16px] text-black/75 font-normal text-start pt-3" dangerouslySetInnerHTML={{__html: p5}}/>
            <PostFooter/>
        </div>
    );
};

export default PostTemplate;
