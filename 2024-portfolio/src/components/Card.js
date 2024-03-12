import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export const CustomCard = ({iconSrc, bodyText, link, linkText,headerText,headerUrl}) => {
  return (
    <Card className="max-w-[400px] bg-card  my-card">
      <CardHeader className="flex gap-3">
        <Image
          alt="card logo"
          height={40}
          radius="sm"
          src={iconSrc}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{headerText}</p>
          <p className="text-small text-default-500">{headerUrl}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{bodyText}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={link}
        >
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
}
