import {Card, CardContent} from "@mui/material";
import noImage from "../assets/images/no_image.jpg";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import {timeToX} from "pages/helper";
import React from "react";

const NewsCompo = ({feeds = []}: any) => {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3">
      {feeds.map((feed: Feed) => (
        <div className="col-span-1 m-3" key={feed.url}>
          <Card className="news_card" sx={{height: "250px"}} title={feed.name}>
            <CardContent>
              <div className="flex">
                <h2 className="font-bold text-lg">{feed.name.substring(0, 75)}</h2>
                <img
                  alt={feed.name}
                  src={feed?.image?.thumbnail.contentUrl || noImage}
                  className="max-w-full ml-3 w-24 h-24 object-cover"
                />
              </div>
              <div className="flex justify-between items-center my-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <PersonIcon />
                  <span className="mx-2">{feed.provider[0].name}</span>
                </div>
                <div className="flex items-center">
                  <AccessTimeFilledIcon />
                  <span className="mx-2">{timeToX(feed.datePublished)}</span>
                </div>
              </div>
              <p className="mt-5 text-gray-700 text-ellipsis">
                {feed.description.substring(0, 97)}...
                <a href={feed.url} target="_blank" className="text-blue-700 ml-1">
                  Know more
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default NewsCompo;
