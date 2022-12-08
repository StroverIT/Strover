{/\_ <motion.div
variants={icon2}
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.8 }}
initial="hidden"
animate="visible"
className=" absolute left-[500px] top-[200px] text-white " >

<div className="relative flex flex-col items-center justify-center gap-y-10">
<div className="w-20 h-20 ">
<Image
                src="/indexForms/forms/Polygon 4.svg"
                alt="white spider logo"
                layout="fill"
              />
</div>
<div className="absolute w-16 h-16 text-xl font-semibold">
<Image
                src="/icons/delivery-truck.png"
                layout="fill"
                alt="acadamey hat"
              />
</div>
<div className="absolute mt-2 ml-1 text-xl font-semibold top-20">
Transport
</div>
</div>
</motion.div> _/}

 <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
    page_path: window.location.pathname,
    });
`}
      </Script>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${process.env.GTM_ID});
`}
</Script>
