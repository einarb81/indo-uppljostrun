
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FeedbackForm = () => {
  const [activity, setActivity] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!activity.trim()) {
      toast({
        title: "Skyldusvæði vantar",
        description: "Vinsamlegast lýstu athöfninni áður en þú sendir inn.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulating an API call to send the email
    // In a real implementation, this would call a serverless function or API endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Endurgjöf send",
        description: "Nafnlausu uppljóstruninni þín hefur verið komið til regluvörslu indó",
      });
      
      // Reset form after 4 seconds (changed from 2 seconds)
      setTimeout(() => {
        setActivity("");
        setContactInfo("");
        setIsSuccess(false);
      }, 4000);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const successVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      } 
    }
  };

  return (
    <>
      {!isSuccess ? (
        <motion.form
          initial="hidden"
          animate="visible"
          variants={formVariants}
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto"
        >
          <Card className="border border-border/30 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs font-normal px-2 py-0 border-primary/20 text-primary bg-primary/5">
                  Nafnlaust
                </Badge>
              </div>
              <CardTitle className="text-2xl">Nafnljós uppljóstrun</CardTitle>
              <CardDescription>
                Hér getur þú sem starfsmaður indó á nafnlausan hátt upplýst um atburði, hluti eða hvað sem er annað sem þér finnst vera ámælisvert. Regluvörður indó fer í gegnum innsendinguna þína og vinnur hana samkvæmt uppljóstrunar vinnuferli indó sparisjóðs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="activity" className="text-sm font-medium">
                  Lýstu því sem gerðist eða því sem þér finnst <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="activity"
                  placeholder="Skrifaðu hér eins íterlega um það sem þú vilt uppljóstra um eins og kostur gefst..."
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="min-h-[120px] border-border/50 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="contactInfo" className="text-sm font-medium flex items-center justify-between">
                  <span>Samskiptaupplýsingar</span>
                  <span className="text-xs text-muted-foreground">(Valfrjálst)</span>
                </Label>
                <Input
                  id="contactInfo"
                  placeholder="Netfang eða símanúmer"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="border-border/50 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                />
              </motion.div>
            </CardContent>
            <CardFooter>
              <motion.div variants={itemVariants} className="w-full">
                <Button 
                  type="submit" 
                  className="w-full transition-all duration-300 relative bg-[#F5BEFD] hover:bg-[#F5BEFD]/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sendi...
                    </span>
                  ) : (
                    "Senda inn nafnlausa uppljóstrun"
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.form>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={successVariants}
          className="w-full max-w-md mx-auto"
        >
          <Card className="border border-border/30 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardHeader className="space-y-2 text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <CardTitle className="text-2xl">Takk Fyrir</CardTitle>
              <CardDescription>
                Nafnlausu uppljóstruninni þín hefur verið komið til regluvörslu indó
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      )}
    </>
  );
};

export default FeedbackForm;
