import { motion } from "framer-motion";
import FeedbackForm from "@/components/FeedbackForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4 sm:p-6 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-screen-md mx-auto text-center mb-8"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-block mb-2"
        >
          <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
            Nafnlaus Uppljóstrun
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium tracking-tight mb-2"
        >
          Deildu Skoðunum Þínum
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-muted-foreground max-w-md mx-auto"
        >
          Endurgjöf þín skiptir máli. Fylltu út eyðublaðið hér að neðan til að senda nafnlausa endurgjöf með valfrjálsum samskiptaupplýsingum.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full"
      >
        <FeedbackForm />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-12 text-sm text-muted-foreground text-center"
      >
        <p>Persónuvernd í fyrsta sæti. Gögnum þínum er aðeins deilt eins og tilgreint er í eyðublaðinu.</p>
      </motion.div>
    </div>
  );
};

export default Index;
