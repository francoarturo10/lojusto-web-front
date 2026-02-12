export function UbiPage() {
    return (
        <div className="w-full p-4">
            <div className="mb-4 text-center">
                <h2 className="text-3xl font-bold text-brand-red mb-4">Ubicanos en:</h2>
                <p className="text-xl ">
                    Estamos ubicados en <strong>Guillermo Prescott 232, Trujillo - Perú</strong>
                </p>
            </div>
            <div className="w-full h-75 sm:h-87.5 md:h-105 lg:h-125 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.858228686733!2d-79.01295647103812!3d-8.115914236245292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad17d34df9cc2d%3A0xf82e04f1c718eacf!2sGuillermo%20Prescott%20232%2C%20Trujillo%2013007!5e0!3m2!1ses-419!2spe!4v1770415560541!5m2!1ses-419!2spe"
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}