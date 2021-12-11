import Image from 'next/image'

const Img = ({src}) => {
    return <div class="w-full rounded hover:opacity-90 cursor-pointer">
                <Image src={src}
                    width={600}
                    height={400}
                    alt="image" 
                />
            </div>
}

const ImageGallery = ({images}) => {
    return (
        <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
            {images ? images.map(img => <Img src={img} />) : null}
        </div>
    )
}

export default ImageGallery
