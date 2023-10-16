import {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from '../routes/estilo.modulo.css'

function Home (){
  const [slidePreview, setSlidePreview]=useState(1)
  const imagens = [
    {id:'1', image:'./src/assets/img2.png'},
    {id:'2', image:'./src/assets/img3.jpg'},
    {id:'3', image:'./src/assets/img1.png'},
  ]

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 720){
        setSlidePreview(1)
      }else{
        setSlidePreview(2)
      }
    }
    handleResize();
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return(
    <section>
     <Swiper
     slidePreview={slidePreview}
     pagination={{clickable:true}}
     navigation>
      {imagens.map((item)=>(
        <SwiperSlide key = {item.id}>
          <img src={item.image} alt="Slide" className={styles.slideItem}/>
        </SwiperSlide>
      )
      )}

     </Swiper>
    </section>
  )
}
export default Home