import React, { useEffect, useState } from 'react';
import tmdbApi from '../api/tmdb';

const TrailerModal = ({ mediaType, mediaId, onClose }) => {
    
    const [videoId, setVideoId ] = useState(null);
    
    
    useEffect(()=>{
        const fetchTrailer  = async () => {
            const json  = await tmdbApi.get(`/${mediaType}/${mediaId}/videos`);
            const video = json.results.find(o => o.site === 'YouTube');
            setVideoId(video?.key);
        }

        fetchTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div className="trailer-modal-backdrop" onClick={onClose} />
            <div className="trailer-modal">
            {videoId && (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
                <button
                    className="trailer-modal__close"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </>
    );
}

export default TrailerModal;
