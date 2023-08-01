import OTP from '../models/otp.js'
import User from '../models/auth.js'
import Mailer from '../utilities/mailer.js'

export const generateOTP = async (req, res) => {
    try {
	    var user = await User.findOne({email: req.body.email})
	    if (user) {
	        console.log('server ctrl genOTP genOTP');
	        if(!await OTP.findOne({email: req.body.email})){
	            var otp = new OTP({
	            email: req.body.email,
	            otp: (Math.floor((Math.random()*10000)+1)).toString(),
	            expiresIn: new Date().getTime() + 300*1000
	            })
	            await otp.save()
	        } else {
	            var otp = await OTP.findOneAndUpdate({email: req.body.email},{
	                otp: Math.floor((Math.random()*10000)+1),
	                expiresIn: new Date().getTime() + 300*1000
	            },
	            {returnDocument:'after'})
	        }
	        const otpStatus = Mailer(otp)
	        if (otpStatus){
	            return res.status(200).send({message:'Mail Sent Successfully'})
	        }else {
	            return res.status(500).send({message:'Sending Mail failed'})
	        }
	    } else {
	        return res.status(500).send({message:'User Not Found, Please register'})
	    }
    } catch (error) {
        return res.status(500).send({message:error})
	}
}

export const verifyOTP = async (req, res) => {
    try {
		var user = await OTP.findOne({ email: req.body.email })
		if (user) {
			if(req.body.recvOTP === user.otp){
				return res.status(200).send({message:true})
			}
			else{
				return res.status(500).send({message:false})
			}
		}else {
			return res.status(500).send({message:'Retry'})
		}
    } catch (error) {
    	return res.status(500).send({message:'Retry'+error})
    }
}
