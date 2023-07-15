"use client";
import Image from "next/image";
import React, { useState } from "react";
import { addLike } from "../../../API/likes";
import { toastError, toastSuccess } from "../../../libs/notifications";

const Like = ({ _id, ip, isLiked, title, likesLen }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <form
        className={``}
        action={() =>
          addLike({ projectId: _id, ip }).then((data) => {
            if (data.error) toastError(data.error);
            if (data.message) {
              toastSuccess(data.message);
            }
            setLoading(false);
          })
        }
      >
        {!isLoading && (
          <button type="submit" onClick={() => setLoading(true)}>
            <div className="flex items-center">
              <div className="relative w-7 h-7">
                <Image
                  src="/icons/love.png"
                  alt={title}
                  className="object-contain change-to-blue"
                  fill
                />
              </div>
              <div>Харесай ({likesLen})</div>
            </div>
          </button>
        )}
      </form>
      {isLoading && (
        <div className="flex-center gap-x-2">
          <div className="loader"></div>
          <div className="text-sm">Зарежда се...</div>
        </div>
      )}
    </>
  );
};

export default Like;
