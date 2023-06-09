import Member from "./member"

const AboutUs: React.FC = () => {
  return (
  <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong> Our team of export engeniers has created the best use experiences in some of the most popular apps worldwide
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Nuestro equipo</h2>
        <div className="mt-2">&ldquo;spac-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grd-cols-5 gap-6 lg:gap-20">
          <Member id="lala" name="lala" socialId="@lala" link=""/>
          <Member id="lolo" name="lolo" socialId="@lolo" link=""/>
          <Member id="lili" name="lili" socialId="@lili" link=""/>
          <Member id="lulu" name="lulu" socialId="@lulu" link=""/>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
